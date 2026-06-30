"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

function SkillBar({
  percentage,
  color,
  delay = 0,
}: {
  percentage: number;
  color: string;
  delay?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const targetScale = percentage / 100;

  useFrame((state) => {
    if (!ref.current) return;
    const elapsed = state.clock.elapsedTime - delay;
    const progress = Math.min(Math.max(elapsed / 1.5, 0), 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    ref.current.scale.x = targetScale * eased;
  });

  return (
    <group>
      <mesh position={[0, -0.1, 0]}>
        <planeGeometry args={[2, 0.15]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </mesh>
      <mesh ref={ref} position={[-1 + targetScale / 2, -0.1, 0.01]}>
        <planeGeometry args={[2, 0.15]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

export function SkillCard3D({
  name,
  percentage,
  color = "#3b82f6",
}: {
  name: string;
  percentage: number;
  color?: string;
}) {
  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh>
          <planeGeometry args={[2.5, 1.5]} />
          <meshPhysicalMaterial
            color="#0a0a1a"
            transparent
            opacity={0.8}
            roughness={0.2}
            metalness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
        <Text
          position={[0, 0.4, 0.01]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
        <Text
          position={[0.8, 0.4, 0.01]}
          fontSize={0.12}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {percentage}%
        </Text>
        <SkillBar percentage={percentage} color={color} />
      </Float>
    </group>
  );
}

export function SkillCardsRow({ skills }: { skills: { name: string; percentage: number }[] }) {
  const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#6366f1", "#ec4899", "#f59e0b"];

  return (
    <div className="h-[200px] w-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: false }}
      >
        {skills.slice(0, 6).map((skill, i) => (
          <SkillCard3D
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            color={colors[i % colors.length]}
          />
        ))}
      </Canvas>
    </div>
  );
}
