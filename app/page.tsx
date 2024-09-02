"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

let Autodesk: any;

const ThreeDimensionalViewer: React.FC = () => {
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
          var token =
            "<access_token>";
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

          const documentId =
            "urn:<urn_of_your_model_in_urn_format>";
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
    <main className="min-h-screen">
      <header className="px-5 py-2.5 flex flex-row gap-10 border-b border-gray-500 w-full fixed top-0 z-10 bg-gray-200">
        <h1 className="font-bold self-center">Applix AI Copilot 3D Viewer</h1>
      </header>
      <div className="w-full mt-20">
        Upload 3D Viewer
        <div id="three-d-viewer"></div>
      </div>
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
    </main>
  );
};
export default ThreeDimensionalViewer;
