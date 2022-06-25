import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export default function Camera({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/camera.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao.geometry}
        material={nodes.camerao.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_1.geometry}
        material={nodes.camerao_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_2.geometry}
        material={nodes.camerao_2.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_3.geometry}
        material={nodes.camerao_3.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_4.geometry}
        material={nodes.camerao_4.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_5.geometry}
        material={nodes.camerao_5.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_6.geometry}
        material={nodes.camerao_6.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_7.geometry}
        material={nodes.camerao_7.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_8.geometry}
        material={nodes.camerao_8.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_9.geometry}
        material={nodes.camerao_9.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_10.geometry}
        material={nodes.camerao_10.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_11.geometry}
        material={nodes.camerao_11.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_12.geometry}
        material={nodes.camerao_12.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camerao_13.geometry}
        material={nodes.camerao_13.material}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={11.1}
        near={5.89}
        fov={54.43}
        position={[3.55, 6.76, 5.7]}
        rotation={[-0.71, 0.38, 0.31]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={11.1}
        near={5.89}
        fov={54.43}
        position={[3.55, 6.76, 5.7]}
        rotation={[-0.71, 0.38, 0.31]}
      />
    </group>
  );
}

useGLTF.preload("/wefwef.glb");
