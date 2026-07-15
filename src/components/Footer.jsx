import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="border-t border-cosmic-gray/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cosmic-gray text-sm mb-4 md:mb-0 tracking-wide"
          >
            © {new Date().getFullYear()} Nicolas Peña Irurita. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cosmic-gray text-sm tracking-wider uppercase"
          >
            END OF TRANSMISSION
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
