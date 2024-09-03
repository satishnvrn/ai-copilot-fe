import Script from "next/script";
import React, { useEffect, useState } from "react";

import "@/styles/autodesk.style.min.css";

interface ThreeDModelViewerProps {
  accessToken: string;
  modelUrn: string;
}

let Autodesk: any;

const ThreeDModelViewer: React.FC<ThreeDModelViewerProps> = ({
  accessToken,
  modelUrn,
}) => {
  let viewer: {
    finish: () => void;
    start: () => any;
    loadDocumentNode: (doc: any, model: any) => void;
  } | null;

  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    initializeViewer();

    return () => {
      if (viewer) {
        viewer.finish();
        viewer = null;
        Autodesk.Viewing.shutdown();
      }
    };
  }, [isScriptLoaded]);

  const initializeViewer = () => {
    if (isScriptLoaded) {
      const options = {
        env: "AutodeskProduction2",
        api: "streamingV2",
        getAccessToken: function (
          onTokenReady: (token: string, expiry: number) => void
        ) {
          var token = accessToken;
          var timeInSeconds = 3600;
          onTokenReady(token, timeInSeconds);
        },
      };

      Autodesk.Viewing.Initializer(options, () => {
        console.log("Initialization started...");
        const viewerElement = document.getElementById("three-d-viewer");
        viewer = new Autodesk.Viewing.GuiViewer3D(viewerElement);

        if (viewer) {
          var startedCode = viewer.start();
          if (startedCode > 0) {
            console.error("Failed to create a Viewer: WebGL not supported.");
            return;
          }

          console.log("Initialization complete, loading a model next...");

          const documentId = `urn:${modelUrn}`;
          Autodesk.Viewing.Document.load(documentId, (doc: any) => {
            const model = doc.getRoot().getDefaultGeometry();
            viewer?.loadDocumentNode(doc, model);
          });
        } else {
          console.log("Failed to create a Viewer: WebGL not supported.");
          return;
        }
      });
    }
  };

  return (
    <div>
      <div id="three-d-viewer"></div>
      <Script
        src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.99.1/viewer3D.min.js"
        onReady={() => {
          console.log("autodesk script loaded");
          Autodesk = (window as any).Autodesk;
          setIsScriptLoaded(true);
        }}
        onError={(e) => {
          console.log("autodesk script error", e);
        }}
      />
    </div>
  );
};

export default ThreeDModelViewer;
