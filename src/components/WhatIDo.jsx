import { motion } from 'framer-motion'
import { Database, Cloud, Brain, Settings } from 'lucide-react'
import PowerOnEffect from './PowerOnEffect'

const WhatIDo = () => {
  const services = [
    {
      number: '01',
      icon: Database,
      title: 'Data Pipelines',
      description: 'ETL/ELT with Airflow, DBT, Spark, Python. I build robust and scalable pipelines to process millions of records.',
      metric: '200k+ records processed',
    },
    {
      number: '02',
      icon: Cloud,
      title: 'Data Architecture',
      description: 'Warehouses (Snowflake, Redshift, BigQuery), Lakes, Lakehouse. I design architectures that scale with your business.',
      metric: '5+ cloud platforms',
    },
    {
      number: '03',
      icon: Brain,
      title: 'Data Engineering for AI',
      description: 'Feature Stores, ML Pipelines, Orchestration. I prepare your data for production-ready AI models.',
      metric: '15+ ML models deployed',
    },
    {
      number: '04',
      icon: Settings,
      title: 'Cloud Infrastructure',
      description: 'AWS, GCP, Azure, Docker, Kubernetes. Infrastructure as code for reliable and reproducible deployments.',
      metric: '99.9% uptime achieved',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="what-i-do"
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Nebulosa de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cosmic-blue/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cosmic-gray/8 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-[0.1em] uppercase text-balance">
            <span className="gradient-text">Chapter III: Capabilities</span>
          </h2>
          <p className="text-xl text-cosmic-light max-w-2xl mx-auto tracking-wide">
            Spacecraft modules for your data mission
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <PowerOnEffect key={index} index={index} total={services.length}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                <div className="gradient-border h-full">
                  <div className="gradient-border-content h-full flex flex-col md:flex-row items-start gap-6">
                    {/* Número de módulo */}
                    <div className="flex-shrink-0">
                      <div 
                        className="text-6xl font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-300 text-cosmic-blue"
                      >
                        /{service.number}
                      </div>
                    </div>

                    {/* Icono del módulo */}
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="size-16 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, rgba(74, 124, 247, 0.1) 0%, rgba(139, 157, 195, 0.05) 100%)',
                          border: '1px solid rgba(74, 124, 247, 0.3)'
                        }}
                      >
                        <Icon
                          size={32}
                          className="text-cosmic-blue"
                        />
                      </motion.div>
                    </div>

                    {/* Contenido */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-display font-bold mb-3 text-white tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-cosmic-light leading-relaxed mb-4 font-light">
                        {service.description}
                      </p>
                      <div 
                        className="inline-block px-4 py-2 rounded-lg text-sm font-semibold"
                        style={{
                          backgroundColor: 'rgba(74, 124, 247, 0.1)',
                          border: '1px solid rgba(74, 124, 247, 0.3)',
                          color: '#4A7CF7'
                        }}
                      >
                        {service.metric}
                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>
              </PowerOnEffect>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhatIDo
