import { motion } from 'framer-motion'

const MarsRover = () => {
  return (
    <div className="relative w-full h-48 overflow-hidden rounded-xl mb-8"
      style={{
        background: 'linear-gradient(180deg, #1A0A00 0%, #2D1B0E 30%, #8B4513 60%, #A0522D 80%, #6B3410 100%)',
      }}
    >
      {/* Mars sky - stars */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-white"
            style={{
              top: `${Math.random() * 30}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 1 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Mars surface hills */}
      <div className="absolute bottom-0 w-full h-12">
        <svg viewBox="0 0 400 48" className="w-full h-full opacity-60">
          <path d="M0 48 L0 40 Q50 20 100 38 Q150 25 200 35 Q250 15 300 32 Q350 22 400 35 L400 48 Z" fill="#6B3410" />
          <path d="M0 48 L0 44 Q30 30 80 42 Q130 28 180 40 Q220 32 280 38 Q320 30 400 42 L400 48 Z" fill="#5C2D0E" />
        </svg>
      </div>

      {/* Rocks on surface */}
      <div className="absolute bottom-8 left-1/4 w-2 h-2 rounded-sm bg-amber-800 opacity-60" />
      <div className="absolute bottom-10 right-1/3 w-3 h-2 rounded-sm bg-amber-900 opacity-50" />
      <div className="absolute bottom-6 left-1/3 w-1.5 h-1.5 rounded-sm bg-amber-700 opacity-40" />

      {/* Rover */}
      <motion.div
        className="absolute bottom-10"
        initial={{ x: -150 }}
        whileInView={{ x: 'calc(100vw + 150px)' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ 
          duration: 8,
          ease: 'linear',
        }}
      >
        <svg width="90" height="40" viewBox="0 0 90 40" fill="none" className="text-amber-100">
          {/* Wheels */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            {/* Back wheel */}
            <circle cx="15" cy="30" r="7" stroke="#C0C0C0" strokeWidth="2" />
            <circle cx="15" cy="30" r="2" fill="#C0C0C0" />
            <line x1="15" y1="23" x2="15" y2="37" stroke="#C0C0C0" strokeWidth="0.5" />
            <line x1="8" y1="30" x2="22" y2="30" stroke="#C0C0C0" strokeWidth="0.5" />
            
            {/* Middle wheel */}
            <circle cx="38" cy="30" r="7" stroke="#C0C0C0" strokeWidth="2" />
            <circle cx="38" cy="30" r="2" fill="#C0C0C0" />
            <line x1="38" y1="23" x2="38" y2="37" stroke="#C0C0C0" strokeWidth="0.5" />
            <line x1="31" y1="30" x2="45" y2="30" stroke="#C0C0C0" strokeWidth="0.5" />
            
            {/* Front wheel */}
            <circle cx="60" cy="30" r="7" stroke="#C0C0C0" strokeWidth="2" />
            <circle cx="60" cy="30" r="2" fill="#C0C0C0" />
            <line x1="60" y1="23" x2="60" y2="37" stroke="#C0C0C0" strokeWidth="0.5" />
            <line x1="53" y1="30" x2="67" y2="30" stroke="#C0C0C0" strokeWidth="0.5" />
          </motion.g>

          {/* Rover body */}
          <rect x="8" y="15" width="55" height="14" rx="3" fill="#D4A574" stroke="#8B6914" strokeWidth="1" />
          
          {/* Body details */}
          <rect x="12" y="18" width="10" height="8" rx="1" fill="#C49A6C" opacity="0.7" />
          <rect x="25" y="18" width="8" height="8" rx="1" fill="#C49A6C" opacity="0.7" />
          <rect x="36" y="18" width="8" height="8" rx="1" fill="#C49A6C" opacity="0.7" />

          {/* RTG (nuclear power) */}
          <rect x="48" y="16" width="12" height="4" rx="1" fill="#8B6914" opacity="0.6" />

          {/* Mast / Camera */}
          <rect x="22" y="6" width="4" height="10" rx="1" fill="#D4A574" />
          <rect x="20" y="4" width="8" height="4" rx="1" fill="#A0A0A0" />
          <circle cx="24" cy="6" r="1.5" fill="#4A7CF7" opacity="0.8" />
          
          {/* Robotic arm */}
          <motion.g
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '63px 18px' }}
          >
            <rect x="62" y="14" width="12" height="3" rx="0.5" fill="#C0C0C0" opacity="0.7" />
            <rect x="72" y="12" width="10" height="3" rx="0.5" fill="#A0A0A0" opacity="0.6" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Tire tracks on surface */}
      <motion.div
        className="absolute bottom-10 h-2"
        initial={{ width: 0 }}
        whileInView={{ width: '60%' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 8, ease: 'linear' }}
        style={{
          background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 5px, rgba(139,69,19,0.3) 5px, rgba(139,69,19,0.3) 7px)',
        }}
      />
    </div>
  )
}

export default MarsRover
