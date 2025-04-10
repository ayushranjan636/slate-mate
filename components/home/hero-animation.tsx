"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei"
import { useTheme } from "next-themes"
import type * as THREE from "three"

function HeroSphere() {
  const mesh = useRef<THREE.Mesh>(null)
  const { resolvedTheme } = useTheme()

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={resolvedTheme === "dark" ? "#007AFF" : "#1E2A38"}
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

export function HeroAnimation() {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <HeroSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
