"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function generateRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function Particles() {
  const mesh = useRef<THREE.Points>(null!);
  const count = 500;

  const positions = useMemo(() => {
    const rand = generateRandom(42);
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (rand() - 0.5) * 10;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const rand = generateRandom(123);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      col[i3] = 0.1 + rand() * 0.2;
      col[i3 + 1] = 0.4 + rand() * 0.3;
      col[i3 + 2] = 1.0;
    }
    return col;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const objects = useMemo(() => {
    return [
      { position: [2, 1, -3] as [number, number, number], color: "#0066ff" },
      { position: [-2, -1, -2] as [number, number, number], color: "#00aaff" },
      { position: [1, -2, -4] as [number, number, number], color: "#0044cc" },
      { position: [-1, 2, -3] as [number, number, number], color: "#0088ff" },
    ];
  }, []);

  return (
    <group ref={group}>
      {objects.map((obj, i) => (
        <mesh key={i} position={obj.position}>
          {i % 3 === 0 ? (
            <octahedronGeometry args={[0.3, 0]} />
          ) : i % 3 === 1 ? (
            <torusGeometry args={[0.2, 0.08, 8, 16]} />
          ) : (
            <icosahedronGeometry args={[0.25, 0]} />
          )}
          <meshStandardMaterial
            color={obj.color}
            transparent
            opacity={0.3}
            wireframe
            emissive={obj.color}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Particles />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
