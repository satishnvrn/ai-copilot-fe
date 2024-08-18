"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, PerspectiveCamera, OrbitControls, Plane } from "@react-three/drei";
import Model from "./LoaderCanvas";
import { Vector3, DoubleSide } from 'three';

interface ModelViewerProps {
  model: {
    name: string;
    link: string;
  };
}

const ModelViewer: React.FC<ModelViewerProps> = ({ model }) => {
  return (
    <div className="h-[40vh] w-full">
      <Canvas flat linear shadows>
        <PerspectiveCamera makeDefault fov={50} position={[10, 10, 16]} />
        <ambientLight intensity={1} />
        <directionalLight
          intensity={8}
          position={[0, 100, 100]}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          castShadow
        />
        <Model
            glbFileLink={model.link}
          />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
