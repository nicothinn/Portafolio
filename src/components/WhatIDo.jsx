import { motion } from 'framer-motion'
import { Database, Cloud, Brain, Settings } from 'lucide-react'

const WhatIDo = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Pipelines',
      description: 'ETL/ELT with Airflow, DBT, Spark, Python. I build robust and scalable pipelines to process millions of records.',
      color: 'electric-blue',
    },
    {
      icon: Cloud,
      title: 'Data Architecture',
      description: 'Warehouses (Snowflake, Redshift, BigQuery), Lakes, Lakehouse. I design architectures that scale with your business.',
      color: 'data-green',
    },
    {
      icon: Brain,
      title: 'Data Engineering for AI',
      description: 'Feature Stores, ML Pipelines, Orchestration. I prepare your data for production-ready AI models.',
      color: 'electric-blue',
    },
    {
      icon: Settings,
      title: 'Cloud Infrastructure',
      description: 'AWS, GCP, Azure, Docker, Kubernetes. Infrastructure as code for reliable and reproducible deployments.',
      color: 'data-green',
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
    hidden: { opacity: 0, y: 50 },
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
      id="what-i-do"
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
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">What I Do</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Complete data engineering solutions to transform your organization
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="gradient-border h-full">
                  <div className="gradient-border-content h-full">
                    <div className="flex flex-col h-full">
                      <div 
                        className="mb-6 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{
                          backgroundColor: service.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)'
                        }}
                      >
                        <Icon
                          size={32}
                          style={{
                            color: service.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                          }}
                        />
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-4 text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhatIDo

