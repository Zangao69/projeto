import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Plane, Box } from '@react-three/drei';

const Modelo = () => {
  return (
    <div className="three-d-model">
      <h2>Modelo 3D</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          {/* Adicionar elementos 3D */}
          <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <meshStandardMaterial attach="material" color="lightgray" />
          </Plane>
          <Box args={[1, 1, 1]} position={[0, 0.5, 0]}>
            <meshStandardMaterial attach="material" color="blue" />
          </Box>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Modelo;
