"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export function ThreeCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 8], fov: 45 }}
      // This will set the default background color to black
      // gl={{ antialias: false, toneMapping: THREE.NoToneMapping }}
      // dpr={[1, 2]} // Device Pixel Ratio
    >
      <Suspense fallback={null}>
        {/* All our 3D elements will go here */}
        {/* A simple ambient light */}
        <ambientLight intensity={0.5} />
        {/* A directional light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Suspense>
    </Canvas>
  );
}
