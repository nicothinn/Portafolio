import { motion } from 'framer-motion'
import { Download, MessageCircle, ArrowDown } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-data-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Data Engineer</span>
            <span className="block gradient-text">specialized in</span>
            <span className="block text-white">building pipelines,</span>
            <span className="block gradient-text">scalable architectures</span>
            <span className="block text-white">and AI products</span>
            <span className="block gradient-text">production-ready</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I help organizations transform data into products, insights, and
            automated decisions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/cv.pdf"
              download="Nicolas_Pena_Irurita_CV.pdf"
              className="group relative px-8 py-4 bg-gradient-to-r from-electric-blue to-data-green text-black font-semibold rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={20} />
                Download CV
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-data-green to-electric-blue"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-electric-blue text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
              Book a Consultation
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <motion.a
              href="#what-i-do"
              className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-electric-blue transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm">Explore more</span>
              <ArrowDown size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

