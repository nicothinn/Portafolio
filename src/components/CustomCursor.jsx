import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Aura exterior */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 20,
          mass: 0.15
        }}
        style={{
          width: '40px',
          height: '40px',
          background: 'radial-gradient(circle, rgba(74, 124, 247, 0.3) 0%, rgba(139, 157, 195, 0.1) 50%, transparent 100%)',
          boxShadow: '0 0 15px rgba(74, 124, 247, 0.4), 0 0 30px rgba(139, 157, 195, 0.2)',
          willChange: 'transform, opacity'
        }}
      />
      
      {/* Punto central */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 2000,
          damping: 15,
          mass: 0.05
        }}
        style={{
          width: '8px',
          height: '8px',
          background: 'linear-gradient(135deg, #4A7CF7 0%, #8B9DC3 100%)',
          boxShadow: '0 0 8px rgba(74, 124, 247, 0.6)',
          willChange: 'transform, opacity'
        }}
      />
    </>
  )
}

export default CustomCursor
