import { motion } from 'framer-motion'
import { Calendar, TrendingUp, Code, Heart } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'VIP Carwash, Automotive Detailing',
      period: 'Jan 2023 – Jan 2025',
      icon: TrendingUp,
      highlights: [
        'Implemented ML models for demand forecasting and operational optimization',
        'Built analytical dashboards enabling data-driven decisions',
        'Deployed AI agent for automated appointment scheduling',
      ],
      color: 'electric-blue',
    },
    {
      title: 'Independent Data & IT Consultant',
      company: 'Self-employed',
      period: 'Jan 2023 – Present',
      icon: Code,
      highlights: [
        'Automated ERP processes and built data pipelines (Python, MySQL, SQL Server, SAP HANA)',
        'Advised on data migration, dimensional modeling, and data quality',
        'Trained teams on BI tools and AI for automated reporting',
      ],
      color: 'data-green',
    },
    {
      title: 'Healthcare Data Analyst',
      company: 'EPS Delagente Comfenalco Valle',
      period: 'Aug 2025 – Present',
      icon: Heart,
      highlights: [
        'Led optimization of clinical and administrative data management processes',
        'Designed Big Data architecture for medical orders and medications',
        'Developed executive dashboards for strategic decision-making',
      ],
      color: 'electric-blue',
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
      id="experience"
      className="py-32 px-4 sm:px-6 lg:px-8"
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
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building data solutions and driving business impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {experiences.map((experience, index) => {
            const Icon = experience.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="gradient-border"
              >
                <div className="gradient-border-content">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-display font-bold text-white">
                          {experience.title}
                        </h3>
                        <span 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            backgroundColor: experience.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)',
                            border: `1px solid ${experience.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.3)' : 'rgba(18, 247, 214, 0.3)'}`,
                            color: experience.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                          }}
                        >
                          {experience.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mt-2">
                        <Calendar size={16} />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: experience.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                        }}
                      />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {experience.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-3 text-gray-400 leading-relaxed"
                        >
                          <span
                            className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: experience.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                            }}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience
