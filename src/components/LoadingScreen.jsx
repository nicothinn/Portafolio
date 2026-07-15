import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => onComplete(), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      {/* Nebulosa animada de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-gray/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cosmic-blue/10 rounded-full blur-3xl" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center">
        {/* Texto INITIALIZING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-[0.15em] uppercase text-white">
            INITIALIZING
          </h2>
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-cosmic-blue text-sm tracking-wider"
          >
            ...
          </motion.span>
        </motion.div>

        {/* Barra de progreso orbital */}
        <div className="relative w-64 h-64 mx-auto">
          {/* Órbita exterior */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(0, 119, 255, 0.2)"
              strokeWidth="0.5"
            />
            {/* Progreso */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1"
              strokeDasharray={`${(progress / 100) * 283} 283`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
              style={{ transition: 'stroke-dasharray 0.1s ease' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A7CF7" />
                <stop offset="100%" stopColor="#8B9DC3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Planeta central */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="size-20 rounded-full bg-gradient-to-br from-cosmic-blue to-cosmic-gray opacity-30 blur-xl" />
          </motion.div>

          {/* Porcentaje */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold gradient-text">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
