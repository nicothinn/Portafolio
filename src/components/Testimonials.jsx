import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adrian Ortiz',
      role: 'IT Coordinator, EPS Comfenalco',
      content:
        'Nicolas has been instrumental in optimizing our clinical and administrative data processes. His Big Data architecture design and executive dashboards have significantly improved our operational efficiency and decision-making capabilities.',
      rating: 5,
    },
    {
      name: 'Cristian Ruiz',
      role: 'Manager, VIP Carwash',
      content:
        'Besides giving him his first opportunity as my cousin, he took over our finances, marketing, and employee management, increasing everything by 200%. I\'m amazed by everything he was able to achieve just with data.',
      rating: 5,
    },
    {
      name: 'Sandra Patricia Mosquera',
      role: 'Director, Data & AI Engineering Program (UAO)',
      content:
        'He was always an outstanding student with an average grade above 4.5. He was always ready to propose new ideas and participate in events and hackathons. His dedication and innovative thinking set him apart.',
      rating: 5,
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
      id="testimonials"
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
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What those who have worked with me say
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="gradient-border"
            >
              <div className="gradient-border-content h-full flex flex-col">
                <Quote
                  size={32}
                  className="text-electric-blue mb-4"
                />
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-800 pt-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-data-green text-lg">★</span>
                    ))}
                  </div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

