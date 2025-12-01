import { motion } from 'framer-motion'
import { Search, Layout, Code, Rocket, FileText } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'Understanding the business, objectives, and challenges. Deep analysis of requirements and existing architecture.',
      color: 'electric-blue',
    },
    {
      icon: Layout,
      title: 'Data Architecture',
      description: 'Blueprint design. Scalable, documented architecture aligned with best practices.',
      color: 'data-green',
    },
    {
      icon: Code,
      title: 'Develop & Build',
      description: 'Building pipelines and models. Clean, testable, and maintainable code from day one.',
      color: 'electric-blue',
    },
    {
      icon: Rocket,
      title: 'Deploy & Monitor',
      description: 'Automated deployment and continuous monitoring. Infrastructure as code for reproducibility.',
      color: 'data-green',
    },
    {
      icon: FileText,
      title: 'Documentación & Handoff',
      description: 'Complete documentation and knowledge transfer. Your team ready to maintain and scale.',
      color: 'electric-blue',
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

  return (
    <section
      id="process"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-dark-blue/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Work Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Proven methodology to deliver quality results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-data-green to-electric-blue opacity-30" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-6"
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
                      style={{
                        backgroundColor: step.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)',
                        borderColor: step.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.3)' : 'rgba(18, 247, 214, 0.3)'
                      }}
                    >
                      <Icon 
                        size={24} 
                        style={{
                          color: step.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                        }}
                      />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-electric-blue/30 to-data-green/30" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="text-sm font-semibold px-3 py-1 rounded-full"
                        style={{
                          color: step.color === 'electric-blue' ? '#0077FF' : '#12F7D6',
                          backgroundColor: step.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)'
                        }}
                      >
                        Step {index + 1}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process

