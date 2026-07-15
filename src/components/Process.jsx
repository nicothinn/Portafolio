import { motion, AnimatePresence } from 'framer-motion'
import { Search, Layout, Code, Rocket, FileText } from 'lucide-react'
import { useState } from 'react'

const Process = () => {
  const [isReversed, setIsReversed] = useState(false)
  const toggleDirection = () => setIsReversed(!isReversed)

  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'Understanding the business, objectives, and challenges. Deep analysis of requirements and existing architecture.',
    },
    {
      icon: Layout,
      title: 'Data Architecture',
      description: 'Blueprint design. Scalable, documented architecture aligned with best practices.',
    },
    {
      icon: Code,
      title: 'Develop & Build',
      description: 'Building pipelines and models. Clean, testable, and maintainable code from day one.',
    },
    {
      icon: Rocket,
      title: 'Deploy & Monitor',
      description: 'Automated deployment and continuous monitoring. Infrastructure as code for reproducibility.',
    },
    {
      icon: FileText,
      title: 'Documentation & Handoff',
      description: 'Complete documentation and knowledge transfer. Your team ready to maintain and scale.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const orbitSize = 1100

  return (
    <section
      id="process"
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-[0.1em] uppercase text-balance">
            <span className="gradient-text">Work Process</span>
          </h2>
          <p className="text-xl text-cosmic-light max-w-2xl mx-auto text-pretty">
            Proven methodology to deliver quality results
          </p>
        </motion.div>

        {/* Orbiting Space Station */}
        <div className="relative flex items-center justify-center min-h-[550px] py-16">
          {/* Orbit ring - hidden on mobile */}
          <motion.div
            animate={{ rotate: isReversed ? -360 : 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="hidden md:block absolute rounded-full border border-cosmic-blue/15"
            style={{
              width: orbitSize,
              height: orbitSize,
              borderStyle: 'dashed',
              zIndex: 20,
              left: '50%',
              top: '50%',
              marginLeft: -orbitSize / 2,
              marginTop: -orbitSize / 2,
            }}
          />
          
          {/* Second orbit ring (tilted) - hidden on mobile */}
          <motion.div
            animate={{ rotate: isReversed ? 360 : -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="hidden md:block absolute rounded-full border border-cosmic-gray/10"
            style={{
              width: orbitSize * 0.85,
              height: orbitSize * 0.85,
              borderStyle: 'dashed',
              zIndex: 20,
              left: '50%',
              top: '50%',
              marginLeft: -(orbitSize * 0.85) / 2,
              marginTop: -(orbitSize * 0.85) / 2,
            }}
          />

          {/* Space Station icon orbiting - hidden on mobile */}
          <motion.div
            animate={{ rotate: isReversed ? -360 : 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="hidden md:block absolute"
            style={{
              width: orbitSize,
              height: orbitSize,
              zIndex: 20,
              left: '50%',
              top: '50%',
              marginLeft: -orbitSize / 2,
              marginTop: -orbitSize / 2,
            }}
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
              {/* Space Station SVG icon */}
              <svg viewBox="0 0 120 80" width="80" height="60" fill="none" className="text-cosmic-blue">
                <rect x="0" y="32" width="25" height="16" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                <rect x="95" y="32" width="25" height="16" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                <line x1="25" y1="40" x2="35" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="85" y1="40" x2="95" y2="40" stroke="currentColor" strokeWidth="1" />
                <line x1="5" y1="36" x2="20" y2="36" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="5" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="5" y1="44" x2="20" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="100" y1="36" x2="115" y2="36" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="100" y1="40" x2="115" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="100" y1="44" x2="115" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <rect x="35" y="30" width="50" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <rect x="40" y="33" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                <rect x="60" y="33" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                <rect x="42" y="27" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <rect x="52" y="27" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <rect x="62" y="27" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <line x1="60" y1="30" x2="60" y2="20" stroke="currentColor" strokeWidth="1" />
                <circle cx="60" cy="19" r="2" stroke="currentColor" strokeWidth="0.5" />
                <rect x="45" y="50" width="30" height="8" rx="2" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
                <line x1="45" y1="50" x2="48" y2="48" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="75" y1="50" x2="72" y2="48" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                {/* Direction arrow */}
                {isReversed ? (
                  <path d="M55 10 L60 5 L65 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                ) : (
                  <path d="M55 70 L60 75 L65 70" stroke="currentColor" strokeWidth="1.5" fill="none" />
                )}
              </svg>
            </button>
          </motion.div>

          {/* Decorative dots - hidden on mobile */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            const radius = orbitSize / 2
            return (
              <motion.div
                key={i}
                className="hidden md:block absolute w-1.5 h-1.5 rounded-full bg-cosmic-blue/30"
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

          {/* Process steps content in center */}
          <div className="relative mx-auto max-w-2xl" style={{ zIndex: 10 }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-blue via-cosmic-gray to-cosmic-blue opacity-30" />

              <div className="space-y-12">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative flex items-start gap-6"
                    >
                      <div className="relative z-10 flex-shrink-0">
                        <div 
                          className="size-16 rounded-full border-2 flex items-center justify-center"
                          style={{
                            backgroundColor: 'rgba(74, 124, 247, 0.1)',
                            borderColor: 'rgba(74, 124, 247, 0.3)'
                          }}
                        >
                          <Icon size={24} className="text-cosmic-blue" />
                        </div>
                        {index < steps.length - 1 && (
                          <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-cosmic-blue/30 to-cosmic-gray/30" />
                        )}
                      </div>

                      <div className="flex-grow pt-2">
                        <div className="flex items-center gap-3 mb-3">
                          <span 
                            className="text-sm font-semibold px-3 py-1 rounded-full"
                            style={{
                              color: '#4A7CF7',
                              backgroundColor: 'rgba(74, 124, 247, 0.1)'
                            }}
                          >
                            Step {index + 1}
                          </span>
                          <h3 className="text-2xl font-display font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-cosmic-light leading-relaxed max-w-2xl font-light">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
