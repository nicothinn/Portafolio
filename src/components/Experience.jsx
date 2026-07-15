import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Calendar, TrendingUp, Code, Heart, Database } from 'lucide-react'
import TypeWriter from './TypeWriter'
import ScrollRocket from './ScrollRocket'

const Experience = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const experiences = [
    {
      title: 'Data Engineer',
      company: 'Go Ecosystem Digital Health',
      period: 'Feb 2026 – Present',
      icon: Database,
      highlights: [
        'Manage centralized data infrastructure for ~15 clinics nationwide, leading legacy-to-cloud migration to Microsoft Fabric (OneLake & Lakehouse)',
        'Led development of an AI Agent integrated with dashboards for proactive KPI alerts and designed clinical Deep Learning models for operational decision-making',
        'Automated data extraction from external platforms and Oracle BI using RPA (Python & Selenium), ensuring regulatory compliance in Power BI',
      ],
    },
    {
      title: 'Healthcare Data Analyst',
      company: 'Delagente Healthcare Insurance',
      period: 'Aug 2025 – Jan 2026',
      icon: Heart,
      highlights: [
        'Developed large-scale data pipelines using Spark and Microsoft Fabric, achieving COP $2B savings by identifying fixed-cost contractual inefficiencies',
        'Deployed AI Agents for medical master data standardization and created predictive models for high-cost patient populations to optimize clinical management',
      ],
    },
    {
      title: 'Independent Data & AI Consultant',
      company: 'Self-employed',
      period: 'Jan 2023 – Present',
      icon: Code,
      highlights: [
        'Designed and integrated multi-agent systems and advanced cognitive workflows (OpenAI API, LangChain, LangGraph) connected to ERP, CRM, and corporate SQL architectures',
        'Automated end-to-end business workflows using Python and self-hosted n8n; provided strategic consulting on data modeling, governance, and quality assurance',
      ],
    },
    {
      title: 'Data Analyst',
      company: 'VIP Carwash, Automotive Detailing',
      period: 'Jan 2023 – Jan 2025',
      icon: TrendingUp,
      highlights: [
        'Implemented AI agents integrated with relational databases and automated ETL pipelines for real-time customer scheduling and operations optimization',
        'Built executive analytics dashboards and ML models for demand forecasting, increasing operational efficiency and staff allocation',
      ],
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
      ref={sectionRef}
      id="experience"
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Nebulosa de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-blue/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-gray/8 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-[0.1em] uppercase text-balance">
            <span className="gradient-text">Chapter VI: Flight Log</span>
          </h2>
          <p className="text-xl text-cosmic-light max-w-2xl mx-auto tracking-wide">
            Flight log of my professional journey
          </p>
        </motion.div>

        <div className="flex gap-8 lg:gap-12">
          {/* Columna izquierda: Timeline (~90%) */}
          <div className="flex-1 min-w-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              {/* Timeline vertical */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-blue via-cosmic-gray to-cosmic-blue opacity-30" />

              <div className="space-y-16">
                {experiences.map((experience, index) => {
                  const Icon = experience.icon
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative flex items-start gap-6"
                    >
                      {/* Icono orbital (sin MiniRocket) */}
                      <div className="relative z-10 flex-shrink-0 flex flex-col items-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                          className="size-16 rounded-full border-2 flex items-center justify-center"
                          style={{
                            backgroundColor: 'rgba(74, 124, 247, 0.1)',
                            borderColor: 'rgba(74, 124, 247, 0.3)',
                            boxShadow: '0 0 15px rgba(74, 124, 247, 0.2)'
                          }}
                        >
                          <Icon 
                            size={24} 
                            className="text-cosmic-blue"
                          />
                        </motion.div>
                        {index < experiences.length - 1 && (
                          <div className="hidden md:block w-0.5 h-12 bg-gradient-to-b from-cosmic-blue/30 to-cosmic-gray/30" />
                        )}
                      </div>

                  {/* Contenido */}
                  <div className="flex-grow">
                    <div className="gradient-border">
                      <div className="gradient-border-content">
                        {/* Mission Log Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-3xl font-display font-bold text-white tracking-wide">
                                {experience.title}
                              </h3>
                            </div>
                            <p className="text-cosmic-gray text-lg">{experience.company}</p>
                          </div>
                          <div className="flex items-center gap-2 text-cosmic-gray">
                            <Calendar size={16} />
                            <span className="text-sm tracking-wide">{experience.period}</span>
                          </div>
                        </div>

                        {/* Mission Log Format */}
                        <div className="mb-6">
                          <div 
                            className="inline-block px-4 py-2 rounded-lg text-sm font-bold tracking-wider uppercase mb-4"
                            style={{
                              backgroundColor: 'rgba(74, 124, 247, 0.1)',
                              border: '1px solid rgba(74, 124, 247, 0.3)',
                              color: '#4A7CF7'
                            }}
                          >
                            MISSION LOG · {experience.period.split('–')[0].trim()}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 tracking-wide">
                            <span 
                              className="w-2 h-2 rounded-full bg-cosmic-blue"
                            />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-3">
                            {experience.highlights.map((highlight, hIndex) => (
                              <motion.li
                                key={hIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: hIndex * 0.1 }}
                                className="flex items-start gap-3 text-cosmic-light leading-relaxed font-light"
                              >
                                <span
                                  className="mt-2 w-2 h-2 rounded-full flex-shrink-0 bg-cosmic-blue"
                                />
                                <span>
                                  <TypeWriter 
                                    text={highlight} 
                                    delay={30} 
                                    startDelay={hIndex * 200}
                                  />
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Columna derecha: Pista del cohete (~10%) */}
      <aside className="hidden lg:block w-20 flex-shrink-0 relative">
        <ScrollRocket scrollYProgress={scrollYProgress} />
      </aside>
    </div>
    </div>
    </section>
  )
}

export default Experience
