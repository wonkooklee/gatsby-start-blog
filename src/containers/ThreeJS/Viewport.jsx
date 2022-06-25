import React, { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Points, PointMaterial } from "@react-three/drei";
// import { useGLTF } from "@react-three/drei/core/useGLTF";
import Model from "./Dog";
import Camera from "./Camera";
import "./canvas.css";

export default function Viewport() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <OrbitControls autoRotate />
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={0.1} environment="city">
          <spotLight
            position={[280, 15, 10]}
            angle={0.3}
            penumbra={1}
            castShadow
            color={"purple"}
            intensity={10}
            shadow-bias={-0.0001}
          />
          <spotLight
            position={[149, 104, 10]}
            angle={0.3}
            penumbra={1}
            castShadow
            color={"blue"}
            intensity={10}
            shadow-bias={-0.0001}
          />
          <Camera />
        </Stage>
      </Suspense>
    </Canvas>
  );
}
