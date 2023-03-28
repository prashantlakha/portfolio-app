import { React, useEffect, useState } from "react";
import { Canvas, canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundcolor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

// const ComputersCanvas = () => {
//   return <Canvas />;
// };x

export default Computers;
