"use client";

import React, { useRef, useEffect, useState, RefObject } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, GroupProps, useLoader } from "@react-three/fiber";
import { Group, Box3, AnimationMixer, AnimationClip, Vector3 } from "three";
import { GLTFLoader } from "three-stdlib";

interface ModelProps extends GroupProps {
  glbFileLink: string;
}

export default function Model({ glbFileLink, ...props }: ModelProps) {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Group>(null);
  const { scene, materials, animations } = useLoader(GLTFLoader, glbFileLink);
  const mixer = useRef<AnimationMixer>();
  const [objectHeight, setObjectHeight] = useState<number | null>(null);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  useEffect(() => {
    if (!scene || !meshRef.current) return;

    const box = new Box3().setFromObject(meshRef.current);
      const size = box.getSize(new Vector3());
      const maxBound = Math.max(size.x, size.y, size.z);
      const scaleFactor = 10 / maxBound;
      // Set the scale of the group to fit the maximum boundary box
      meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);

      const height = size.y * scaleFactor;
      setObjectHeight(height + 1);

    // Create a mixer and add the animation clips to it
    if (animations && animations.length) {
      mixer.current = new AnimationMixer(meshRef.current);
      animations.forEach((clip: AnimationClip) => {
        const action = mixer.current?.clipAction(clip);
        if (action) {
          action.play();
        }
      });
    }
  }, [scene, animations]);

  return (
    <group {...props} ref={groupRef}>
      <primitive ref={meshRef} object={scene} materials={materials} />
    </group>
  );
}

Model.preload = (glbFileLink: string) => {
  return useGLTF.preload(glbFileLink);
};
