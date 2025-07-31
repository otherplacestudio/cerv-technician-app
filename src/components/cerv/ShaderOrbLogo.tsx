'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

interface ShaderOrbLogoProps {
  size?: number
  className?: string
}

export const ShaderOrbLogo: React.FC<ShaderOrbLogoProps> = ({ 
  size = 40, 
  className = '' 
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const { theme, resolvedTheme } = useTheme()
  const animationRef = useRef<number>()
  const rendererRef = useRef<THREE.WebGLRenderer>()

  useEffect(() => {
    if (!mountRef.current) return

    const currentTheme = resolvedTheme || theme
    
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    
    // Create renderer with proper settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    })
    
    renderer.setSize(size, size)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Shader material
    const vertexShader = `
      varying vec2 vUv;
      varying float vDistortion;
      uniform float uTime;
      
      float noise(vec3 p) {
        return sin(p.x * 10.0) * sin(p.y * 10.0) * sin(p.z * 10.0);
      }
      
      void main() {
        vUv = uv;
        vec3 newPosition = position;
        float distortion = noise(position + uTime * 0.5) * 0.1;
        newPosition += normal * distortion;
        vDistortion = distortion;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `

    const fragmentShader = `
      varying vec2 vUv;
      varying float vDistortion;
      uniform float uTime;
      uniform float uTheme;
      
      void main() {
        vec3 color1 = mix(vec3(0.9), vec3(0.1), uTheme);
        vec3 color2 = mix(vec3(0.1), vec3(0.9), uTheme);
        
        float gradient = vUv.y + vDistortion;
        vec3 finalColor = mix(color1, color2, gradient);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `

    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uTheme: { value: currentTheme === 'dark' ? 1 : 0 }
      }
    })

    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    camera.position.z = 3

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
      material.uniforms.uTime.value += 0.01
      material.uniforms.uTheme.value = currentTheme === 'dark' ? 1 : 0
      sphere.rotation.y += 0.005
      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      
      if (rendererRef.current) {
        rendererRef.current = undefined
      }
    }
  }, [size, theme, resolvedTheme])

  return (
    <div 
      ref={mountRef} 
      className={`${className}`}
      style={{ width: size, height: size }}
    />
  )
}