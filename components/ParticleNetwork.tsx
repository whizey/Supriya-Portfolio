'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const { mouse, viewport } = useThree()
  const particlesRef = useRef<THREE.Points>(null)
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const particleCount = isMobile ? 300 : 1000
  
  const [positions, originalPositions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const origPos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 10
      pos[i] = origPos[i] = x
      pos[i + 1] = origPos[i + 1] = y
      pos[i + 2] = origPos[i + 2] = z
    }
    return [pos, origPos]
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      const { array } = particlesRef.current.geometry.attributes.position
      
      // Mouse interaction
      const mouseX = (mouse.x * viewport.width) / 2
      const mouseY = (mouse.y * viewport.height) / 2
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const dx = array[i3] - mouseX
        const dy = array[i3 + 1] - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 2) {
          const force = (2 - dist) / 2
          array[i3] += (dx / dist) * force * 0.1
          array[i3 + 1] += (dy / dist) * force * 0.1
        } else {
          // Slowly return to original position
          array[i3] += (originalPositions[i3] - array[i3]) * 0.02
          array[i3 + 1] += (originalPositions[i3 + 1] - array[i3 + 1]) * 0.02
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00f0ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Connections() {
  const linesRef = useRef<THREE.LineSegments>(null)
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const lineCount = isMobile ? 20 : 50
  
  const positions = useMemo(() => {
    const pos = new Float32Array(lineCount * 6)
    for (let i = 0; i < lineCount * 6; i += 6) {
      pos[i] = (Math.random() - 0.5) * 15
      pos[i + 1] = (Math.random() - 0.5) * 15
      pos[i + 2] = (Math.random() - 0.5) * 8
      pos[i + 3] = (Math.random() - 0.5) * 15
      pos[i + 4] = (Math.random() - 0.5) * 15
      pos[i + 5] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={lineCount * 2}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#a855f7"
        transparent
        opacity={0.2}
      />
    </lineSegments>
  )
}

export default function ParticleNetwork() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles />
        <Connections />
      </Canvas>
    </div>
  )
}
