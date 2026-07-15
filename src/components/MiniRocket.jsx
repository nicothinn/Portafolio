import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const MiniRocket = ({ delay = 0 }) => {
  const [launch, setLaunch] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLaunch(true), 2000 + delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className="relative w-8 h-24 flex-shrink-0">
      {/* Rocket */}
      <motion.div
        className="absolute left-1/2"
        initial={{ y: 20, x: '-50%', opacity: 1 }}
        animate={launch ? { y: -30, opacity: 0 } : { y: 20, x: '-50%', opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Flame */}
        <motion.div
          className="absolute -bottom-4 left-1/2 z-0"
          style={{ x: '-50%', willChange: 'transform, opacity' }}
          animate={launch ? { opacity: [0.6, 1, 0.6] } : { opacity: 0.6 }}
          transition={{ duration: 0.1, repeat: Infinity }}
        >
          <div className="w-3 h-5 rounded-b-full"
            style={{
              background: 'linear-gradient(180deg, #FFD700 0%, #FF6B35 100%)',
              filter: 'blur(1px)',
            }}
          />
        </motion.div>

        {/* Rocket body */}
        <svg width="16" height="28" viewBox="0 0 16 28" className="relative z-10">
          <path d="M8 0 L12 8 L4 8 Z" fill="#C0C0C0" stroke="#808080" strokeWidth="0.5" />
          <rect x="4" y="8" width="8" height="14" fill="#E0E0E0" stroke="#808080" strokeWidth="0.5" />
          <circle cx="8" cy="14" r="3" fill="#4A7CF7" stroke="#808080" strokeWidth="0.5" />
          <path d="M4 22 L1 27 L7 24 Z" fill="#C0C0C0" stroke="#808080" strokeWidth="0.5" />
          <path d="M12 22 L15 27 L9 24 Z" fill="#C0C0C0" stroke="#808080" strokeWidth="0.5" />
        </svg>
      </motion.div>
    </div>
  )
}

export default MiniRocket
