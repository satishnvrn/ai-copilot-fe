import Script from "next/script";
import React, { useEffect, useState } from "react";

import "@/styles/autodesk.style.min.css";
import axios from "axios";

interface ThreeDModelViewerProps {
  modelUrn: string;
}

let Autodesk: any;

const ThreeDModelViewer: React.FC<ThreeDModelViewerProps> = ({ modelUrn }) => {
  let viewer: any | null;

  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [accessTokenExpiry, setAccessTokenExpiry] = useState(0);

  const getAccessToken = async () => {
    try {
      const response = await axios.get("/api/autodesk/accessToken");
      if (response.status === 200) {
        const data = response.data;
        setAccessToken(data.access_token);
        setAccessTokenExpiry(data.expiry || 3599);
      }
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  const initializeViewer = () => {
    const options = {
      env: "AutodeskProduction2",
      api: "streamingV2",
      getAccessToken: function (
        onTokenReady: (token: string, expiry: number) => void
      ) {
        onTokenReady(accessToken, accessTokenExpiry);
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

          function onToolbarCreated() {
            var toolbar = viewer?.getToolbar();
            if (toolbar) {
              toolbar.setVisible(false);
            }
          }

          function onGeometryLoaded() {
            // Open the Model Browser (Model Tree)
            var modelTreeExtension = viewer?.getExtension(
              "Autodesk.ModelStructure"
            );
            console.log("modelTreeExtension", modelTreeExtension);
            if (modelTreeExtension) {
              modelTreeExtension.activate();
            } else {
              viewer
                ?.loadExtension("Autodesk.ModelStructure")
                .then((extension: any) => {
                  extension.activate();
                });
            }
          }

          viewer?.addEventListener(
            Autodesk.Viewing.TOOLBAR_CREATED_EVENT,
            onToolbarCreated
          );

          viewer?.addEventListener(
            Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
            onGeometryLoaded
          );
        });
      } else {
        console.log("Failed to create a Viewer: WebGL not supported.");
        return;
      }
    });
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  useEffect(() => {
    if (isScriptLoaded && accessToken && accessTokenExpiry) {
      initializeViewer();
    }

    return () => {
      if (viewer) {
        viewer.finish();
        viewer = null;
        Autodesk.Viewing.shutdown();
      }
    };
  }, [isScriptLoaded, accessToken, accessTokenExpiry]);

  return (
    <div>
      <div id="three-d-viewer" className="relative"></div>
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
