import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, Zap, Target } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'WhatsApp AI Agents with OpenAI',
      status: 'Production',
      problem: {
        title: 'The Problem',
        description:
          'Real estate companies needed to automate property searches and provide instant quotes to customers, but manual processes were slow and resource-intensive.',
      },
      solution: {
        title: 'The Solution',
        description:
          'Implemented Twilio + OpenAI integration with a real-estate database to automate property searches and quotes in natural language, enabling seamless customer interactions through WhatsApp.',
      },
      technologies: ['Twilio', 'OpenAI API', 'Python', 'Natural Language Processing', 'Real-estate Database'],
      impact: [
        { icon: TrendingUp, text: '50% reduction in response time' },
        { icon: Zap, text: 'Automated property searches and quotes' },
      ],
      color: 'electric-blue',
    },
    {
      title: 'Music ETL & Analytics Dashboard',
      status: 'Production',
      problem: {
        title: 'The Problem',
        description:
          'Need to process and analyze large volumes of music data to identify trends, but lacked an automated pipeline and visualization system.',
      },
      solution: {
        title: 'The Solution',
        description:
          'Built a full Python ETL pipeline with Docker Compose (Airflow, PostgreSQL, Redis) and a Dash/Plotly dashboard to analyze music trends with real-time insights.',
      },
      technologies: ['Python', 'Apache Airflow', 'PostgreSQL', 'Redis', 'Docker Compose', 'Dash', 'Plotly'],
      impact: [
        { icon: TrendingUp, text: 'Automated music trend analysis' },
        { icon: Zap, text: 'Real-time dashboard insights' },
      ],
      color: 'data-green',
    },
    {
      title: 'Industrial Safety Computer Vision',
      status: 'Production',
      problem: {
        title: 'The Problem',
        description:
          'Industrial environments required automated safety monitoring for PPE compliance and fall detection, but manual monitoring was inefficient and error-prone.',
      },
      solution: {
        title: 'The Solution',
        description:
          'Designed a YOLOv8 + MediaPipe system for PPE detection and fall alerts, integrated with Grafana/InfluxDB for real-time monitoring and alerting.',
      },
      technologies: ['YOLOv8', 'MediaPipe', 'Computer Vision', 'Grafana', 'InfluxDB', 'Python', 'PPE Detection'],
      impact: [
        { icon: TrendingUp, text: 'Automated safety compliance monitoring' },
        { icon: Zap, text: 'Real-time fall detection alerts' },
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
      id="projects"
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real projects with measurable impact in production
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {projects.map((project, index) => (
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
                        {project.title}
                      </h3>
                      <span 
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: project.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)',
                          border: `1px solid ${project.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.3)' : 'rgba(18, 247, 214, 0.3)'}`,
                          color: project.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: project.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                        }}
                      />
                      {project.problem.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {project.problem.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: project.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                        }}
                      />
                      {project.solution.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {project.solution.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-lg text-sm"
                        style={{
                          backgroundColor: project.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)',
                          border: `1px solid ${project.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.3)' : 'rgba(18, 247, 214, 0.3)'}`,
                          color: project.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Impact:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.impact.map((impact, impactIndex) => {
                      const ImpactIcon = impact.icon
                      return (
                        <div
                          key={impactIndex}
                          className="flex items-center gap-3 p-4 rounded-lg"
                          style={{
                            backgroundColor: project.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.05)' : 'rgba(18, 247, 214, 0.05)',
                            border: `1px solid ${project.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.2)' : 'rgba(18, 247, 214, 0.2)'}`
                          }}
                        >
                          <ImpactIcon
                            size={20}
                            style={{
                              color: project.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                            }}
                          />
                          <span className="text-gray-300">{impact.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

