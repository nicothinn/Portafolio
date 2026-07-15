import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const NuclearRocket = () => {
  const [isLaunching, setIsLaunching] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLaunching(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl mb-8"
      style={{
        background: 'linear-gradient(180deg, #0A0B0F 0%, #0A0B0F 30%, #1a1a3a 50%, #2a3a5a 70%, #4a6a8a 85%, #8B9DC3 100%)',
      }}
    >
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-white"
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Atmosphere glow */}
      <div className="absolute bottom-0 w-full h-40"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(139, 157, 195, 0.3) 50%, rgba(139, 157, 195, 0.6) 100%)',
        }}
      />

      {/* Rocket */}
      <motion.div
        className="absolute left-1/2"
        initial={{ y: 350, x: '-50%' }}
        animate={isLaunching ? { y: -150, x: '-50%' } : { y: 350, x: '-50%' }}
        transition={{
          duration: 2.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.5
        }}
        style={{ willChange: 'transform' }}
      >
        {/* Exhaust flame */}
        <motion.div
          className="absolute -bottom-12 left-1/2 z-0"
          style={{ x: '-50%', willChange: 'transform, opacity' }}
          animate={{
            scaleY: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 0.1, repeat: Infinity }}
        >
          <div className="w-6 h-16 rounded-b-full"
            style={{
              background: 'linear-gradient(180deg, #FFD700 0%, #FF6B35 50%, #FF4500 100%)',
              filter: 'blur(3px)',
              boxShadow: '0 0 30px rgba(255, 107, 53, 0.8), 0 0 60px rgba(255, 215, 0, 0.4)',
            }}
          />
        </motion.div>

        {/* Rocket SVG */}
        <svg width="60" height="110" viewBox="0 0 60 110" className="relative z-10">
          <path d="M30 0 L40 22 L20 22 Z" fill="#C0C0C0" stroke="#808080" strokeWidth="1" />
          <rect x="20" y="22" width="20" height="55" fill="#E0E0E0" stroke="#808080" strokeWidth="1" />
          <circle cx="30" cy="50" r="8" fill="#FFD700" stroke="#808080" strokeWidth="1" />
          <circle cx="30" cy="50" r="3" fill="#808080" />
          <line x1="30" y1="42" x2="30" y2="46" stroke="#808080" strokeWidth="1.5" />
          <line x1="30" y1="54" x2="30" y2="58" stroke="#808080" strokeWidth="1.5" />
          <line x1="22" y1="50" x2="26" y2="50" stroke="#808080" strokeWidth="1.5" />
          <line x1="38" y1="50" x2="34" y2="50" stroke="#808080" strokeWidth="1.5" />
          <path d="M20 77 L10 90 L20 85 Z" fill="#C0C0C0" stroke="#808080" strokeWidth="1" />
          <path d="M40 77 L50 90 L40 85 Z" fill="#C0C0C0" stroke="#808080" strokeWidth="1" />
          <rect x="23" y="77" width="14" height="8" fill="#808080" stroke="#606060" strokeWidth="1" />
          <circle cx="30" cy="32" r="3" fill="#4A7CF7" stroke="#808080" strokeWidth="0.5" />
          <circle cx="30" cy="68" r="3" fill="#4A7CF7" stroke="#808080" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Launchpad */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-2 bg-cosmic-dark rounded-t" />

      {/* Launch smoke */}
      {isLaunching && (
        <motion.div
          className="absolute left-1/2"
          initial={{ y: 300, opacity: 0, scale: 0.5, x: '-50%' }}
          animate={{ y: 270, opacity: [0, 0.5, 0], scale: [0.5, 2, 3], x: '-50%' }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="w-24 h-12 rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(200, 200, 200, 0.5) 0%, transparent 70%)',
              filter: 'blur(10px)',
            }}
          />
        </motion.div>
      )}
    </div>
  )
}

export default NuclearRocket
