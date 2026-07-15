import { motion } from 'framer-motion'

const DataTransmission = ({ children, delay = 0 }) => {
  return (
    <div className="relative">
      {/* Transmission signal waves */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: [0, 1, 0], scale: [0, 1.5, 2] }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 1.5,
          delay: delay,
          times: [0, 0.5, 1]
        }}
        className="absolute inset-0 rounded-full border-2 border-cosmic-blue/30"
        style={{ zIndex: 0 }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: [0, 1, 0], scale: [0, 1.2, 1.8] }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 1.5,
          delay: delay + 0.2,
          times: [0, 0.5, 1]
        }}
        className="absolute inset-0 rounded-full border-2 border-cosmic-blue/20"
        style={{ zIndex: 0 }}
      />

      {/* Data point indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.3,
          delay: delay + 0.5,
          ease: 'easeOut'
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default DataTransmission
