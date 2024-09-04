"use client";

import React from "react";
import ThreeDimensionalViewer from "@/components/ThreeDModelViewer";

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <header className="px-5 py-2.5 flex flex-row gap-10 border-b border-gray-500 w-full fixed top-0 z-10 bg-gray-200">
        <h1 className="font-bold self-center">Applix AI Copilot 3D Viewer</h1>
      </header>
      <div className="w-full mt-10">
        <ThreeDimensionalViewer
          modelUrn={process.env.NEXT_PUBLIC_AUTODESK_MODEL_URN || ""}
        />
      </div>
    </main>
  );
};
export default LandingPage;
