import { motion } from 'framer-motion'
import { Sparkles, Target, Heart } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Always exploring the latest technologies and best practices.',
      color: 'electric-blue',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Focus on measurable impact and scalable solutions.',
      color: 'data-green',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuine love for building data-driven products.',
      color: 'electric-blue',
    },
  ]

  return (
    <section
      id="about"
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
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Who I Am
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I'm an engineer from Colombia in the ultimate semester of my Data & AI Engineering degree, passionate about turning complex systems and data into intelligent, scalable solutions. I thrive in environments where technology, strategy, and architecture meet, and I'm known for going the extra mile—proposing innovative ideas, improving processes, and approaching each challenge with curiosity, discipline, and a mindset focused on impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              My professional identity blends technical depth with agile leadership. I communicate clearly with both technical and non-technical teams, mentor others, and help create structures where collaboration and continuous improvement become part of the culture. I love learning and exploring new perspectives: I speak Spanish, English (C2), Portuguese (B2), and I'm working toward achieving HSK2 Mandarin proficiency by 2026 as part of my long-term global development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond engineering, I'm someone who values creativity, balance, and personal growth. I enjoy singing, playing tennis, discovering new ideas, and understanding how technology shapes sectors like finance, investment, and advanced engineering. Being from Colombia inspires me to approach every project with resilience, optimism, and purpose—building solutions that empower people, strengthen organizations, and leave a meaningful impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="gradient-border">
              <div className="gradient-border-content p-0">
                <div className="aspect-square bg-gradient-to-br from-electric-blue/20 to-data-green/20 rounded-lg overflow-hidden">
                  <img 
                    src="/foto.JPG" 
                    alt="Nicolas Peña Irurita" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
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
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{
                      backgroundColor: value.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)'
                    }}
                  >
                    <Icon 
                      size={32} 
                      style={{
                        color: value.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                      }}
                    />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            What Kind of Challenges Am I Looking For?
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Projects that require scalable data architectures, complex pipelines,
            integration with AI models, or data-driven digital transformation.
            I'm especially interested in challenges where I can combine data engineering
            with measurable business impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

