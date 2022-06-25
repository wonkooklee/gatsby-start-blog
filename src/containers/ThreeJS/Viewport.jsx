import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as random from "maath/random/dist/maath-random.esm";
import "./canvas.css";
import { useEffect } from "react";
import gsap from "gsap";

export default function Viewport() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 1.4] }}>
      <CameraController />
      <Suspense fallback={null}>
        <Stars></Stars>
      </Suspense>
    </Canvas>
  );
}

function CameraController() {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableZoom = false;
    gsap.fromTo(
      camera,
      { zoom: 100 },
      {
        duration: 2,
        zoom: 2,
        onUpdate: function () {
          camera.updateProjectionMatrix();
        },
      }
    );

    gsap.to(camera, {
      duration: 2,
      x: 10,
      y: 0,
      z: 0,
      onUpdate: function () {
        controls.update();
      },
    });
    return () => controls.dispose();
  }, [camera, gl]);
  return null;
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 2 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
