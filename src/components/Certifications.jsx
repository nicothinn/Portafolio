import { motion } from 'framer-motion'
import { Award, Calendar, Shield, BookOpen, BarChart, Database } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: 'AWS AI Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Dec 2025',
      expiry: 'Dec 2028',
      status: 'completed',
    },
    {
      icon: Shield,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Jan 2026',
      expiry: 'Jan 2029',
      status: 'completed',
    },
    {
      icon: BookOpen,
      title: 'EF SET English C2',
      issuer: 'EF Standard English Test',
      date: 'Sep 2024',
      expiry: 'No expiry',
      status: 'completed',
    },
    {
      icon: BookOpen,
      title: 'McKinsey Forward',
      issuer: 'McKinsey.org',
      date: 'Jun 2026',
      expiry: 'No expiry',
      status: 'completed',
    },
    {
      icon: BarChart,
      title: 'Microsoft Power BI (PL-300)',
      issuer: 'Microsoft',
      date: 'In progress',
      expiry: '—',
      status: 'in-progress',
    },
    {
      icon: Database,
      title: 'Databricks Data Engineer Associate',
      issuer: 'Databricks',
      date: 'In progress',
      expiry: '—',
      status: 'in-progress',
    },
  ]

  return (
    <section
      id="certifications"
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
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-[0.1em] uppercase text-balance">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-cosmic-light max-w-2xl mx-auto tracking-wide">
            Badges and professional accreditations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 3 }}
                className="group relative"
                style={{ perspective: '1000px' }}
              >
                <div className="gradient-border h-full">
                  <div className="gradient-border-content h-full flex flex-col items-center text-center">
                    {/* Icono tipo insignia */}
                    <div className="relative mb-6">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="size-16 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: 'rgba(74, 124, 247, 0.1)',
                          border: '1px solid rgba(74, 124, 247, 0.3)',
                        }}
                      >
                        <Icon size={28} className="text-cosmic-blue" />
                      </motion.div>
                      {/* Glow de fondo */}
                      <div
                        className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                        style={{
                          background: 'radial-gradient(circle, rgba(74, 124, 247, 0.4) 0%, transparent 70%)',
                        }}
                      />
                    </div>

                    {/* Título */}
                    <h3 className="text-lg font-display font-bold text-white mb-2 tracking-wide">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-cosmic-gray text-sm mb-4 font-light">
                      {cert.issuer}
                    </p>

                    {/* Fechas */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-2 text-xs text-cosmic-light/70">
                        <Calendar size={12} />
                        <span>Issued: {cert.date}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs text-cosmic-light/50">
                        <Calendar size={12} />
                        <span>Expires: {cert.expiry}</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    {cert.status === 'in-progress' && (
                      <motion.div
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mt-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                        style={{
                          backgroundColor: 'rgba(255, 193, 7, 0.15)',
                          border: '1px solid rgba(255, 193, 7, 0.4)',
                          color: '#FFC107',
                        }}
                      >
                        In Progress
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certifications
