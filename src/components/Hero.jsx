import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import GalaxyBackground from './GalaxyBackground'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-dvh flex items-center justify-center relative overflow-hidden"
    >
      {/* 3D Interactive Galaxy Background */}
      <GalaxyBackground />

      {/* Nebulosa animada de fondo con parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div data-scroll data-scroll-speed="-0.5" className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cosmic-blue/8 rounded-full blur-3xl" />
        <div data-scroll data-scroll-speed="-0.3" className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cosmic-gray/8 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-center"
        >
          {/* Título principal - UNA línea gigante */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight tracking-[0.15em] uppercase text-balance"
          >
            <span className="gradient-text">DATA & AI ENGINEER</span>
          </motion.h1>

          {/* Subtítulo - UNA línea */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-xl md:text-2xl text-cosmic-light max-w-3xl mx-auto mb-16 leading-relaxed tracking-wide text-pretty"
          >
            Making sense of a universe built from data.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-20"
          >
            <motion.a
              href="#about"
              className="inline-flex flex-col items-center gap-3 text-cosmic-gray hover:text-cosmic-blue transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm tracking-[0.2em] uppercase">Scroll to begin</span>
              <ArrowDown size={24} className="text-cosmic-blue" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
