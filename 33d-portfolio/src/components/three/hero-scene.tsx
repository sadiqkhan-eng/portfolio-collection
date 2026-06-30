"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";
import { CanvasErrorBoundary } from "./canvas-error-boundary";

function CodeOrbit({ radius = 2.5, speed = 0.3, yPos = 0 }: { radius?: number; speed?: number; yPos?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const snippets = useMemo(
    () => [
      "const app = new App()",
      "npm run dev",
      "import { AI } from 'ai'",
      "export default function",
      "while(true) { learn() }",
      "async function build()",
      "<Transform />",
      "git push origin main",
    ],
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.y = yPos + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    groupRef.current.rotation.y = state.clock.elapsedTime * speed;
  });

  return (
    <group ref={groupRef}>
      {snippets.map((text, i) => {
        const angle = (i / snippets.length) * Math.PI * 2;
        return (
          <group
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 0.5,
              Math.sin(angle) * radius,
            ]}
          >
            <mesh>
              <planeGeometry args={[1.8, 0.3]} />
              <meshBasicMaterial
                color="#1a1a2e"
                transparent
                opacity={0.8}
                side={THREE.DoubleSide}
              />
            </mesh>
            <Center position={[0, 0, 0.01]}>
              <Text3D
                font="/fonts/helvetiker_regular.typeface.json"
                size={0.08}
                height={0.01}
                curveSegments={4}
              >
                {text}
                <meshBasicMaterial color="#3b82f6" />
              </Text3D>
            </Center>
          </group>
        );
      })}
    </group>
  );
}

function AINodes() {
  const groupRef = useRef<THREE.Group>(null);
  const connectionsRef = useRef<THREE.LineSegments>(null);

  const nodePositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 12; i++) {
      const theta = (i / 12) * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 1.5 + Math.random() * 1;
      positions.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      ]);
    }
    return positions;
  }, []);

  const connectionPairs = useMemo(() => {
    const pairs: number[][] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (Math.random() > 0.7) continue;
        const dist = Math.sqrt(
          nodePositions[i].reduce((sum, _, k) => {
            return sum + Math.pow(nodePositions[i][k] - nodePositions[j][k], 2);
          }, 0)
        );
        if (dist < 3) pairs.push([i, j]);
      }
    }
    return pairs;
  }, [nodePositions]);

  const linePositions = useMemo(() => {
    const pos: number[] = [];
    connectionPairs.forEach(([i, j]) => {
      pos.push(...nodePositions[i], ...nodePositions[j]);
    });
    return new Float32Array(pos);
  }, [connectionPairs, nodePositions]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>
      ))}
      {linePositions.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={linePositions.length / 3}
              array={linePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#8b5cf6" opacity={0.2} transparent />
        </lineSegments>
      )}
    </group>
  );
}

function CenterCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshPhysicalMaterial
        color="#3b82f6"
        transparent
        opacity={0.6}
        wireframe
        emissive="#3b82f6"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <CenterCube />
          </Float>
          <CodeOrbit radius={2.5} speed={0.2} yPos={0.2} />
          <AINodes />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
