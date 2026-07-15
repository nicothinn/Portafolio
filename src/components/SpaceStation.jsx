import { motion } from 'framer-motion'

const SpaceStation = () => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      {/* Main station body */}
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full text-cosmic-blue">
        {/* Solar panels */}
        <rect x="0" y="32" width="25" height="16" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <rect x="95" y="32" width="25" height="16" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="25" y1="40" x2="35" y2="40" stroke="currentColor" strokeWidth="1" />
        <line x1="85" y1="40" x2="95" y2="40" stroke="currentColor" strokeWidth="1" />
        
        {/* Solar panel grid lines */}
        <line x1="5" y1="36" x2="20" y2="36" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="5" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="5" y1="44" x2="20" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="100" y1="36" x2="115" y2="36" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="100" y1="40" x2="115" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="100" y1="44" x2="115" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />

        {/* Main module */}
        <rect x="35" y="30" width="50" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Module details */}
        <rect x="40" y="33" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <rect x="60" y="33" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        
        {/* Docking ports */}
        <rect x="42" y="27" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <rect x="52" y="27" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <rect x="62" y="27" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

        {/* Antenna */}
        <line x1="60" y1="30" x2="60" y2="20" stroke="currentColor" strokeWidth="1" />
        <circle cx="60" cy="19" r="2" stroke="currentColor" strokeWidth="0.5" />
        
        {/* Signal waves from antenna */}
        <motion.circle
          cx="60" cy="19" r="4"
          stroke="currentColor" strokeWidth="0.3"
          fill="none"
          initial={{ opacity: 0.6, r: 3 }}
          animate={{ opacity: 0, r: 8 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.circle
          cx="60" cy="19" r="4"
          stroke="currentColor" strokeWidth="0.3"
          fill="none"
          initial={{ opacity: 0.6, r: 3 }}
          animate={{ opacity: 0, r: 8 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.7 }}
        />

        {/* Bottom module */}
        <rect x="45" y="50" width="30" height="8" rx="2" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        
        {/* Connecting tubes */}
        <line x1="45" y1="50" x2="48" y2="48" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="75" y1="50" x2="72" y2="48" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>

      {/* Glow behind station */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(74, 124, 247, 0.15) 0%, transparent 70%)',
          filter: 'blur(15px)'
        }}
      />
    </motion.div>
  )
}

export default SpaceStation
