// src/components/Model3D.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/model.gltf'); // Substitua '/model.gltf' pelo caminho correto do seu modelo
  return <primitive object={scene} />;
}

function Model3D() {
  return (
    <div className="model-3d-container">
      <Canvas style={{ height: '100%', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Model3D;
