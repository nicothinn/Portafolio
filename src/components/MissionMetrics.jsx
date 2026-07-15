import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Briefcase, Rocket, Building2, Globe } from 'lucide-react'
import DataTransmission from './DataTransmission'

const MetricCard = ({ icon: Icon, value, label, description, delay }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <DataTransmission delay={delay}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        <div className="gradient-border h-full">
          <div className="gradient-border-content text-center h-full flex flex-col justify-center">
            {/* Icono orbital */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-flex items-center justify-center size-16 rounded-full mb-4 mx-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(74, 124, 247, 0.1) 0%, rgba(139, 157, 195, 0.1) 100%)',
                border: '1px solid rgba(74, 124, 247, 0.3)'
              }}
            >
              <Icon size={28} className="text-cosmic-blue" />
            </motion.div>

            {/* Número grande */}
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2 tabular-nums">
              {isVisible ? count : 0}+
            </div>

            {/* Label */}
            <h3 className="text-xl font-display font-bold text-white mb-2 tracking-wide uppercase">
              {label}
            </h3>

            {/* Descripción */}
            <p className="text-cosmic-gray text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </DataTransmission>
  )
}

const MissionMetrics = () => {
  const metrics = [
    {
      icon: Briefcase,
      value: 3,
      label: 'Years of Experience',
      description: 'Driving real impact with data and AI',
    },
    {
      icon: Rocket,
      value: 15,
      label: 'Projects Delivered',
      description: 'From ETL pipelines to AI models',
    },
    {
      icon: Building2,
      value: 5,
      label: 'Industries',
      description: 'Healthcare, Automotive, Consulting, Education, Real Estate',
    },
    {
      icon: Globe,
      value: 4,
      label: 'Languages',
      description: 'Spanish, English C2, Portuguese B2, 中文 A1',
    },
  ]

  return (
    <section
      id="metrics"
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Fondo con estrellas estáticas */}
      <div className="absolute inset-0 overflow-hidden">
        {/* TODO: Canvas de estrellas */}
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
            <span className="gradient-text">Mission Metrics</span>
          </h2>
          <p className="text-xl text-cosmic-light max-w-2xl mx-auto tracking-wide text-pretty">
            Measurable impact in the real world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionMetrics
