import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'

const GalaxyBackground = () => {
  const mountRef = useRef(null)
  const [scrollZoom, setScrollZoom] = useState(400)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x050510)

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000)
    
    // Camera positioned above the galaxy with slight tilt to see the spiral shape
    camera.position.set(0, 250, 350)
    camera.rotation.x = -0.4

    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // ==========================================
    // 1. BACKGROUND STARS (twinkling)
    // ==========================================
    const bgStarCount = 20000
    const bgPositions = new Float32Array(bgStarCount * 3)
    const bgColors = new Float32Array(bgStarCount * 3)
    const bgSizes = new Float32Array(bgStarCount)
    const bgTwinkleSpeed = new Float32Array(bgStarCount)
    const bgBaseOpacity = new Float32Array(bgStarCount)

    for (let i = 0; i < bgStarCount; i++) {
      const radius = 600 + Math.random() * 800
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      bgPositions[i * 3] = Math.sin(phi) * Math.cos(theta) * radius
      bgPositions[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * radius * 0.5
      bgPositions[i * 3 + 2] = Math.cos(phi) * radius

      const colorChoice = Math.random()
      if (colorChoice < 0.7) {
        bgColors[i * 3] = 0.8 + Math.random() * 0.2
        bgColors[i * 3 + 1] = 0.8 + Math.random() * 0.2
        bgColors[i * 3 + 2] = 0.9 + Math.random() * 0.1
      } else if (colorChoice < 0.85) {
        bgColors[i * 3] = 0.4 + Math.random() * 0.3
        bgColors[i * 3 + 1] = 0.5 + Math.random() * 0.3
        bgColors[i * 3 + 2] = 0.8 + Math.random() * 0.2
      } else if (colorChoice < 0.95) {
        bgColors[i * 3] = 0.9 + Math.random() * 0.1
        bgColors[i * 3 + 1] = 0.6 + Math.random() * 0.3
        bgColors[i * 3 + 2] = 0.4 + Math.random() * 0.3
      } else {
        bgColors[i * 3] = 0.6 + Math.random() * 0.4
        bgColors[i * 3 + 1] = 0.4 + Math.random() * 0.3
        bgColors[i * 3 + 2] = 0.6 + Math.random() * 0.4
      }

      const brightness = 0.3 + Math.random() * 0.7
      bgColors[i * 3] *= brightness
      bgColors[i * 3 + 1] *= brightness
      bgColors[i * 3 + 2] *= brightness

      bgSizes[i] = Math.random() * 1.5 + 0.3
      bgTwinkleSpeed[i] = Math.random() * 0.02 + 0.005
      bgBaseOpacity[i] = 0.5 + Math.random() * 0.5
    }

    // ==========================================
    // 2. GALAXY SPIRAL ARMS
    // ==========================================
    const armParticleCount = 40000
    const armPositions = new Float32Array(armParticleCount * 3)
    const armColors = new Float32Array(armParticleCount * 3)
    const armSizes = new Float32Array(armParticleCount)

    const colorPalette = [
      new THREE.Color(0x4A7CF7),
      new THREE.Color(0x8B9DC3),
      new THREE.Color(0x6C5CE7),
      new THREE.Color(0x00D4FF),
      new THREE.Color(0xFF6B6B),
      new THREE.Color(0xFFD93D),
      new THREE.Color(0xFFFFFF),
    ]

    for (let i = 0; i < armParticleCount; i++) {
      const armCount = 3
      const arm = i % armCount
      const radius = Math.random() * 350 + 30
      const armAngle = (arm / armCount) * Math.PI * 2
      const spread = (1 - radius / 400) * 0.6 + 0.2
      const angle = armAngle + (radius * 0.025) + (Math.random() - 0.5) * spread
      
      const discHeight = (1 - radius / 400) * 50 + 5
      const y = (Math.random() - 0.5) * discHeight

      armPositions[i * 3] = Math.cos(angle) * radius
      armPositions[i * 3 + 1] = y
      armPositions[i * 3 + 2] = Math.sin(angle) * radius

      const colorIndex = Math.floor(Math.random() * colorPalette.length)
      const baseColor = colorPalette[colorIndex]
      const brightness = 0.5 + Math.random() * 0.5
      armColors[i * 3] = baseColor.r * brightness
      armColors[i * 3 + 1] = baseColor.g * brightness
      armColors[i * 3 + 2] = baseColor.b * brightness

      armSizes[i] = Math.random() * 2.5 + 0.5
    }

    // ==========================================
    // 3. DENSE CORE
    // ==========================================
    const coreCount = 10000
    const corePositions = new Float32Array(coreCount * 3)
    const coreColors = new Float32Array(coreCount * 3)
    const coreSizes = new Float32Array(coreCount)

    for (let i = 0; i < coreCount; i++) {
      const radius = Math.random() * 80
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      corePositions[i * 3] = Math.sin(phi) * Math.cos(theta) * radius
      corePositions[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * radius * 0.2
      corePositions[i * 3 + 2] = Math.cos(phi) * radius

      const brightness = 0.7 + Math.random() * 0.3
      coreColors[i * 3] = 1 * brightness
      coreColors[i * 3 + 1] = 0.85 * brightness
      coreColors[i * 3 + 2] = 0.6 * brightness

      coreSizes[i] = Math.random() * 4 + 1
    }

    // ==========================================
    // Combine all particles
    // ==========================================
    const total = bgStarCount + armParticleCount + coreCount
    const totalPositions = new Float32Array(total * 3)
    const totalColors = new Float32Array(total * 3)
    const totalSizes = new Float32Array(total)

    let offset = 0
    totalPositions.set(bgPositions, offset * 3)
    totalColors.set(bgColors, offset * 3)
    totalSizes.set(bgSizes, offset)
    offset += bgStarCount

    totalPositions.set(armPositions, offset * 3)
    totalColors.set(armColors, offset * 3)
    totalSizes.set(armSizes, offset)
    offset += armParticleCount

    totalPositions.set(corePositions, offset * 3)
    totalColors.set(coreColors, offset * 3)
    totalSizes.set(coreSizes, offset)

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(totalPositions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(totalColors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(totalSizes, 1))

    // Particle texture
    const particleCanvas = document.createElement('canvas')
    particleCanvas.width = 32
    particleCanvas.height = 32
    const pCtx = particleCanvas.getContext('2d')
    const gradient = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    pCtx.fillStyle = gradient
    pCtx.fillRect(0, 0, 32, 32)
    const particleTexture = new THREE.CanvasTexture(particleCanvas)

    const material = new THREE.PointsMaterial({
      size: 2,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      vertexColors: true,
      opacity: 0.85
    })

    const galaxy = new THREE.Points(geometry, material)
    scene.add(galaxy)

    // ==========================================
    // 4. SHOOTING STARS (like StarField - bright head, fading tail)
    // ==========================================
    const shootingStars = []
    const maxShootingStars = 5

    const createShootingStar = () => {
      const tailLength = 15
      const starX = (Math.random() - 0.5) * 1200
      const starY = (Math.random() * 600 + 200)
      const starZ = (Math.random() - 0.5) * 800 - 300
      const dirX = Math.random() * 0.5 - 0.25
      const dirY = -Math.random() * 0.5 - 0.3
      const dirZ = Math.random() * 0.3 - 0.15

      // Create points for the tail (each point is a small glowing dot)
      const tailPositions = new Float32Array(tailLength * 3)
      const tailColors = new Float32Array(tailLength * 3)
      const tailSizes = new Float32Array(tailLength)
      
      for (let i = 0; i < tailLength; i++) {
        const t = i / tailLength // 0 = head, 1 = tail end
        tailPositions[i * 3] = starX - dirX * 20 * t
        tailPositions[i * 3 + 1] = starY - dirY * 20 * t
        tailPositions[i * 3 + 2] = starZ - dirZ * 20 * t
        
        // Brightness decreases along the tail
        const brightness = 1 - t * 0.9
        const colorValue = 0.55 + brightness * 0.45 // Between 0.55 and 1.0 (like StarField: rgba(139,157,195))
        tailColors[i * 3] = colorValue * 0.71 // 139/255
        tailColors[i * 3 + 1] = colorValue * 0.8  // 157/255
        tailColors[i * 3 + 2] = colorValue * 1.0  // 195/255
        
        // Size decreases along the tail
        tailSizes[i] = (1 - t) * 3 + 0.3
      }

      const tailGeometry = new THREE.BufferGeometry()
      tailGeometry.setAttribute('position', new THREE.BufferAttribute(tailPositions, 3))
      tailGeometry.setAttribute('color', new THREE.BufferAttribute(tailColors, 3))
      tailGeometry.setAttribute('size', new THREE.BufferAttribute(tailSizes, 1))

      const tailMaterial = new THREE.PointsMaterial({
        size: 2,
        map: particleTexture,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
        opacity: 0.8,
        vertexColors: true
      })

      const tail = new THREE.Points(tailGeometry, tailMaterial)
      scene.add(tail)

      return {
        tail,
        tailGeometry,
        tailMaterial,
        starX, starY, starZ,
        dirX, dirY, dirZ,
        progress: Math.random(),
        speed: 0.02 + Math.random() * 0.02,
        tailLength
      }
    }

    for (let i = 0; i < maxShootingStars; i++) {
      shootingStars.push(createShootingStar())
    }

    // ==========================================
    // 5. MOUSE INTERACTION (variable speed)
    // ==========================================
    let mouseX = 0
    let mouseY = 0
    let targetRotationX = 0
    let targetRotationY = 0
    let prevMouseX = 0
    let prevMouseY = 0
    let mouseSpeed = 0

    const handleMouseMove = (event) => {
      mouseSpeed = Math.sqrt(
        Math.pow(event.clientX - prevMouseX, 2) + 
        Math.pow(event.clientY - prevMouseY, 2)
      )
      prevMouseX = event.clientX
      prevMouseY = event.clientY

      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = (event.clientY / window.innerHeight) * 2 - 1
      const speedFactor = Math.min(mouseSpeed / 20, 1) * 0.3 + 0.1
      targetRotationX = mouseY * speedFactor
      targetRotationY = mouseX * speedFactor
    }

    window.addEventListener('mousemove', handleMouseMove)

    // ==========================================
    // 6. SCROLL ZOOM
    // ==========================================
    const handleWheel = (event) => {
      const delta = event.deltaY > 0 ? 20 : -20
      camera.position.z = Math.max(100, Math.min(800, camera.position.z + delta))
    }

    window.addEventListener('wheel', handleWheel)

    // ==========================================
    // 8. ANIMATION LOOP
    // ==========================================
    let animationId
    let currentRotationX = 0
    let currentRotationY = 0
    let time = 0

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.01

      // Smooth galaxy rotation toward mouse
      currentRotationX += (targetRotationX - currentRotationX) * 0.03
      currentRotationY += (targetRotationY - currentRotationY) * 0.03
      galaxy.rotation.x = currentRotationX
      galaxy.rotation.y = currentRotationY + Date.now() * 0.00003

      // Twinkling background stars
      // Update opacity via sizes - we'll rotate the galaxy instead
      // The twinkle is achieved by the additive blending + rotation

      // Animate shooting stars
      shootingStars.forEach((star) => {
        star.progress += star.speed
        
        if (star.progress >= 1) {
          star.progress = 0
          
          // Reset position
          star.starX = (Math.random() - 0.5) * 1200
          star.starY = Math.random() * 600 + 200
          star.starZ = (Math.random() - 0.5) * 800 - 300
          star.dirX = Math.random() * 0.5 - 0.25
          star.dirY = -Math.random() * 0.5 - 0.3
          star.dirZ = Math.random() * 0.3 - 0.15
        }

        // Update tail positions
        const positions = star.tail.geometry.attributes.position.array
        for (let i = 0; i < star.tailLength; i++) {
          const t = i / star.tailLength
          positions[i * 3] = star.starX + star.dirX * (star.progress * 50 - 20 * t)
          positions[i * 3 + 1] = star.starY + star.dirY * (star.progress * 50 - 20 * t)
          positions[i * 3 + 2] = star.starZ + star.dirZ * (star.progress * 50 - 20 * t)
        }
        star.tail.geometry.attributes.position.needsUpdate = true
        
        // Fade out toward end of life
        if (star.progress > 0.7) {
          star.tail.material.opacity = 0.8 * (1 - star.progress) / 0.3
        } else {
          star.tail.material.opacity = 0.8
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      particleTexture.dispose()
      shootingStars.forEach(s => {
        s.tail.geometry.dispose()
        s.tail.material.dispose()
      })
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default GalaxyBackground
