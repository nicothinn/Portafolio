import { motion } from 'framer-motion'

const PowerOnEffect = ({ children, index, total }) => {
  const delay = index * 0.3

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="relative"
    >
      {/* Power-on glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 0.5, 0] }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 1.2,
          delay: delay + 0.3,
          times: [0, 0.3, 0.7, 1]
        }}
        className="absolute inset-0 rounded-xl"
        style={{
          background: 'radial-gradient(circle, rgba(74, 124, 247, 0.4) 0%, transparent 70%)',
          filter: 'blur(20px)',
          zIndex: -1
        }}
      />
      
      {/* Activation line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 0.8,
          delay: delay + 0.2,
          ease: 'easeOut'
        }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cosmic-blue to-transparent origin-left"
        style={{ zIndex: 1 }}
      />

      {children}
    </motion.div>
  )
}

export default PowerOnEffect
