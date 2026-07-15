import { motion } from 'framer-motion'
import { useState } from 'react'

const OrbitingSatellite = ({ children }) => {
  const [isReversed, setIsReversed] = useState(false)

  const toggleDirection = () => {
    setIsReversed(!isReversed)
  }

  const orbitSize = 500 // 5x larger than before (was 256)

  return (
    <div className="relative flex items-center justify-center py-16">
      {/* Orbit ring */}
      <motion.div
        animate={{ rotate: isReversed ? -360 : 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full border border-cosmic-blue/15"
        style={{
          width: orbitSize,
          height: orbitSize,
          borderStyle: 'dashed',
          zIndex: 20
        }}
      />
      
      {/* Second orbit ring (tilted) */}
      <motion.div
        animate={{ rotate: isReversed ? 360 : -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full border border-cosmic-gray/10"
        style={{
          width: orbitSize * 0.85,
          height: orbitSize * 0.85,
          borderStyle: 'dashed',
          zIndex: 20
        }}
      />

      {/* Satellite orbiting the ring */}
      <motion.div
        animate={{ rotate: isReversed ? -360 : 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute"
        style={{ width: orbitSize, height: orbitSize, zIndex: 20 }}
      >
        <button
          onClick={toggleDirection}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-cosmic-dark/80 border border-cosmic-blue/40 hover:border-cosmic-blue/70 transition-all duration-300 cursor-pointer"
          style={{
            boxShadow: '0 0 15px rgba(74, 124, 247, 0.3)',
            backdropFilter: 'blur(4px)'
          }}
          aria-label="Reverse orbit direction"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cosmic-blue">
            <rect x="6" y="10" width="12" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <rect x="9" y="4" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" />
            <rect x="3" y="12" width="18" height="1" rx="0.5" fill="currentColor" opacity="0.3" />
            <circle cx="8" cy="13" r="0.5" fill="currentColor" />
            <circle cx="12" cy="13" r="0.5" fill="currentColor" />
            <circle cx="16" cy="13" r="0.5" fill="currentColor" />
            {isReversed ? (
              <path d="M10 8 L12 6 L14 8" stroke="currentColor" strokeWidth="1" fill="none" />
            ) : (
              <path d="M10 18 L12 20 L14 18" stroke="currentColor" strokeWidth="1" fill="none" />
            )}
          </svg>
        </button>
      </motion.div>

      {/* Decorative dots on orbit */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const radius = orbitSize / 2
        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-cosmic-blue/30"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px - 1px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px - 1px)`,
              zIndex: 20
            }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
          />
        )
      })}

      {/* Content in center */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>
    </div>
  )
}

export default OrbitingSatellite
