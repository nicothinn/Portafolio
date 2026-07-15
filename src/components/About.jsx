import { motion } from 'framer-motion'
import { Sparkles, Target, Heart } from 'lucide-react'
import RevealText from './RevealText'

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Always exploring the latest technologies and best practices.',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Focus on measurable impact and scalable solutions.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuine love for building data-driven products.',
    },
  ]

  return (
    <section
      id="about"
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Nebulosa de fondo con parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div data-scroll data-scroll-speed="-0.3" className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-blue/8 rounded-full blur-3xl" />
        <div data-scroll data-scroll-speed="-0.2" className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-gray/8 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
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
            <span className="gradient-text">Chapter I: About</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto narrativo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-cosmic-light leading-relaxed font-light tracking-wide">
              <RevealText delay={0.1}>
                In the vast landscape of data, one engineer stood out with a passion for turning complex systems into intelligent, scalable solutions.
              </RevealText>
            </p>

            <p className="text-lg text-cosmic-light leading-relaxed font-light tracking-wide">
              <RevealText delay={0.3}>
                I'm an engineer from Colombia, graduated in Data & AI Engineering and currently specializing in Artificial Intelligence with a focus on Deep Learning. I thrive in environments where technology, strategy, and architecture meet, and I'm known for going the extra mile, proposing innovative ideas, improving processes, and approaching each challenge with curiosity, discipline, and a mindset focused on impact.
              </RevealText>
            </p>

            <p className="text-lg text-cosmic-light leading-relaxed font-light tracking-wide">
              <RevealText delay={0.5}>
                My professional identity blends technical depth with agile leadership. I communicate clearly with both technical and non-technical teams, mentor others, and help create structures where collaboration and continuous improvement become part of the culture.
              </RevealText>
            </p>

            <p className="text-lg text-cosmic-light leading-relaxed font-light tracking-wide">
              <RevealText delay={0.7}>
                I love learning and exploring new perspectives: I speak Spanish, English (C2), Portuguese (B2), and I'm working toward achieving HSK2 Mandarin proficiency by 2026 as part of my long-term global development.
              </RevealText>
            </p>
          </motion.div>

          {/* Foto con efecto holograma */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-square" style={{ boxShadow: '0 0 30px rgba(74, 124, 247, 0.2)' }}>
              <img 
                src="/foto.JPG" 
                alt="Nicolas Peña Irurita" 
                className="w-full h-full object-cover"
                style={{ outline: '1px solid rgba(255, 255, 255, 0.1)', outlineOffset: '-1px' }}
              />
              {/* Efecto scan line */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-x-0 h-1 bg-gradient-to-b from-transparent via-cosmic-blue/20 to-transparent"
                />
              </div>
              {/* Efecto glitch on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-cosmic-blue/10 mix-blend-overlay" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Valores profesionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-8 text-center tracking-wide uppercase">
            Professional Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div 
                    className="inline-flex items-center justify-center size-16 rounded-full mb-4 transition-colors duration-300"
                    style={{
                      backgroundColor: 'rgba(74, 124, 247, 0.1)',
                      boxShadow: '0 0 20px rgba(74, 124, 247, 0.15)'
                    }}
                  >
                    <Icon 
                      size={32} 
                      className="text-cosmic-blue"
                    />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2 tracking-wide">
                    {value.title}
                  </h4>
                  <p className="text-cosmic-gray font-light">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
