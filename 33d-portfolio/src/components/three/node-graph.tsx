"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_LABELS = [
  "AI Agents",
  "RAG Systems",
  "MCP Protocols",
  "LLM Apps",
  "Workflows",
  "LangGraph",
  "Vector DBs",
  "AI APIs",
];

function GraphNode({
  position,
  label,
  color,
}: {
  position: [number, number, number];
  label: string;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1;
    meshRef.current.scale.setScalar(pulse);
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <sprite>
        <spriteMaterial>
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </spriteMaterial>
      </sprite>
    </group>
  );
}

function GraphLines({ positions, activeIndex }: { positions: [number, number, number][]; activeIndex: number }) {
  const ref = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const result: { start: [number, number, number]; end: [number, number, number]; opacity: number }[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dist = Math.sqrt(
          positions[i].reduce((sum, _, k) => sum + Math.pow(positions[i][k] - positions[j][k], 2), 0)
        );
        if (dist < 3) {
          result.push({
            start: positions[i],
            end: positions[j],
            opacity: 0.1 + (1 - dist / 3) * 0.2,
          });
        }
      }
    }
    return result;
  }, [positions]);

  return (
    <group ref={ref}>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...line.start, ...line.end])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#8b5cf6"
            transparent
            opacity={0.15}
          />
        </line>
      ))}
    </group>
  );
}

export function NodeGraph() {
  const positions = useMemo<[number, number, number][]>(() => {
    return NODE_LABELS.map((_, i) => {
      const angle = (i / NODE_LABELS.length) * Math.PI * 2;
      const radius = 1.5 + Math.random() * 0.5;
      return [
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 0.5,
        Math.sin(angle) * radius,
      ] as [number, number, number];
    });
  }, []);

  const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#6366f1", "#ec4899", "#f59e0b", "#10b981", "#ef4444"];

  return (
    <div className="h-[400px] w-full">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <GraphLines positions={positions} activeIndex={0} />
        {positions.map((pos, i) => (
          <GraphNode
            key={i}
            position={pos}
            label={NODE_LABELS[i]}
            color={colors[i % colors.length]}
          />
        ))}
      </Canvas>
    </div>
  );
}
