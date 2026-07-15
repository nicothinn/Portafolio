import { motion } from 'framer-motion'

const WarpSpeed = ({ children, index }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.55, 0.085, 0.68, 0.53],
      },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, margin: '-100px' }}
      className="relative"
    >
      {/* Warp speed streaks */}
      {index > 0 && (
        <>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 1,
              times: [0, 0.5, 1]
            }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cosmic-blue to-transparent"
            style={{ zIndex: 1 }}
          />
          
          {/* Side streaks */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: [0, 0.5, 0], scaleX: [0, 1, 0] }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              times: [0, 0.5, 1]
            }}
            className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-cosmic-gray/50 to-transparent"
            style={{ zIndex: 1 }}
          />
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: [0, 0.5, 0], scaleX: [0, 1, 0] }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              times: [0, 0.5, 1]
            }}
            className="absolute top-0 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-cosmic-gray/50 to-transparent"
            style={{ zIndex: 1 }}
          />
        </>
      )}
      
      {children}
    </motion.div>
  )
}

export default WarpSpeed
