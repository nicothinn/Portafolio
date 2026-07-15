import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, TrendingUp, Zap, Target, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  
  const projects = [
    {
      mission: '01',
      title: 'GeoVisionCLIP-Cali',
      subtitle: 'Air Pollution Estimation',
      status: 'RESEARCH',
      github: 'https://github.com/nicothinn/GeoVision-CLIP-Cali',
      image: '/projects/geovision.jpeg',
      problem: {
        title: 'The Problem',
        description:
          'Estimating atmospheric pollution (NO2, SO2, O3) at city scale requires processing massive satellite datasets, but traditional methods lack the ability to fuse multimodal satellite data with deep learning.',
      },
      solution: {
        title: 'The Solution',
        description:
          'Built an air pollution estimation system using RemoteCLIP + Sparse Autoencoders + Bidirectional ConvLSTM + 3D Kriging, with distributed ETL (Dask/Spark) over 6TB of Sentinel-5P satellite data, deployed on FastAPI + Docker.',
      },
      technologies: ['RemoteCLIP', 'Sparse Autoencoders', 'ConvLSTM', 'Dask', 'Spark', 'FastAPI', 'Docker', 'Sentinel-5P'],
      impact: [
        { icon: Target, text: '6TB satellite data processed' },
        { icon: TrendingUp, text: 'Multi-pollutant estimation pipeline' },
      ],
    },
    {
      mission: '02',
      title: 'Multimodal Medical MoE',
      subtitle: 'Mixture of Experts Classifier',
      status: 'RESEARCH',
      github: 'https://github.com/nicothinn/Clasificacion-Medica-con-MoE-Ablation',
      image: '/projects/medical-moe.png',
      problem: {
        title: 'The Problem',
        description:
          'Medical image classification requires handling heterogeneous data types (2D and 3D scans) with high accuracy, but traditional single-model approaches lack the specialization needed for diverse medical imaging modalities.',
      },
      solution: {
        title: 'The Solution',
        description:
          'Designed a Mixture of Experts system with 5 heterogeneous experts (2D and 3D CNN) and an ablation study comparing 4 routing mechanisms (ViT, GMM, Naive Bayes, k-NN with FAISS) on medical images, with adaptive 2D/3D automatic preprocessing.',
      },
      technologies: ['PyTorch', 'CNN 2D/3D', 'ViT', 'FAISS', 'GMM', 'Medical Imaging'],
      impact: [
        { icon: Target, text: 'Multi-expert ensemble architecture' },
        { icon: TrendingUp, text: 'Ablation across 4 routing mechanisms' },
      ],
    },
    {
      mission: '03',
      title: 'Object Detection for Personal Protection',
      subtitle: 'Computer Vision System',
      status: 'PRODUCTION',
      github: null,
      image: '/projects/object-detection.webp',
      problem: {
        title: 'The Problem',
        description:
          'Industrial safety environments lacked real-time detection of personal protective equipment usage. Manual supervision was inconsistent and unable to monitor multiple areas simultaneously.',
      },
      solution: {
        title: 'The Solution',
        description:
          'Developed a real-time object detection system using computer vision to identify PPE compliance across work areas. Deployed as a microservice with REST API, integrating with existing surveillance infrastructure.',
      },
      technologies: ['YOLO', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker', 'Python', 'REST API'],
      impact: [
        { icon: Target, text: 'Real-time PPE compliance detection' },
        { icon: Zap, text: 'Microservice architecture deployment' },
      ],
    },
    {
      mission: '04',
      title: 'Clinical Predictive Model',
      subtitle: 'Time Series & Statistical Analysis',
      status: 'PRODUCTION',
      github: null,
      image: null,
      problem: {
        title: 'The Problem',
        description:
          'EPS Comfenalco needed to predict patient diagnostic groups and clinical deterioration risk using historical service records. Manual analysis could not scale across thousands of patients.',
      },
      solution: {
        title: 'The Solution',
        description:
          'Built a time series model in R using historical patient service data to predict diagnostic group and deterioration probability. Deployed as a microservice integrated into the clinical app, enabling proactive care decisions.',
      },
      technologies: ['R', 'Time Series', 'Shiny', 'Plumber', 'Python', 'PostgreSQL', 'Microservice', 'REST API'],
      impact: [
        { icon: TrendingUp, text: 'Predictive diagnostic grouping' },
        { icon: Target, text: 'Deployed as microservice for clinical app' },
      ],
    },
    {
      mission: '05',
      title: 'Contract Execution Dashboard',
      subtitle: 'EPS–Clinic End-to-End Monitoring',
      status: 'PRODUCTION',
      github: null,
      image: '/projects/contract-dashboard.jpg',
      problem: {
        title: 'The Problem',
        description:
          'EPS Comfenalco lacked visibility into contract execution between the insurer and its network of clinics. Everything lived in scattered Excel files with manual reconciliation — slow, error-prone, and impossible to scale.',
      },
      solution: {
        title: 'The Solution',
        description:
          'Designed and deployed an end-to-end Power BI dashboard integrating contract, billing, and service data. Built large-scale data pipelines using Spark and Microsoft Fabric, achieving COP $2B savings by identifying fixed-cost contractual inefficiencies. Automated ETL pipelines ensured daily updates with real-time visibility.',
      },
      technologies: ['Power BI', 'Spark', 'Fabric', 'SQL', 'ETL', 'DAX', 'Data Warehouse'],
      impact: [
        { icon: TrendingUp, text: 'COP $2B savings from contractual inefficiencies' },
        { icon: Target, text: 'From scattered Excel files to real-time dashboard' },
      ],
    },
    {
      mission: '06',
      title: 'Healthcare Information Agent',
      subtitle: 'AI Assistant for Go Ecosystem',
      status: 'PRODUCTION',
      github: null,
      image: null,
      problem: {
        title: 'The Problem',
        description:
          'Go Ecosystem\'s healthcare analytics dashboard required extensive manual navigation to answer operational questions. Staff spent hours searching for information across multiple reports.',
      },
      solution: {
        title: 'The Solution',
        description:
          'Built an AI agent integrated into the dashboard that answers natural language queries about healthcare metrics, resolves doubts, and proactively surfaces relevant insights from the underlying data warehouse.',
      },
      technologies: ['LangChain', 'OpenAI API', 'Python', 'SQL', 'Power BI', 'Azure', 'RAG'],
      impact: [
        { icon: Zap, text: 'Natural language access to metrics' },
        { icon: TrendingUp, text: 'Reduced query resolution time' },
      ],
    },
    {
      mission: '07',
      title: 'WhatsApp AI Scheduler',
      subtitle: 'Real-Estate CRM Agent',
      status: 'PRODUCTION',
      github: null,
      image: null,
      problem: {
        title: 'The Problem',
        description:
          'A real estate company needed to automate appointment scheduling, modifications, and property searches. Clients had to call during business hours and agents manually checked availability and property details.',
      },
      solution: {
        title: 'The Solution',
        description:
          'Developed a WhatsApp AI assistant connected to the real estate database that schedules and modifies appointments, performs semantic property searches matching client needs, and provides instant responses 24/7.',
      },
      technologies: ['Twilio', 'OpenAI API', 'Python', 'PostgreSQL', 'Semantic Search', 'NLP', 'REST API'],
      impact: [
        { icon: Target, text: '24/7 automated scheduling' },
        { icon: Zap, text: 'Semantic property search engine' },
      ],
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[currentProject]

  return (
    <section
      id="projects"
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
          transition={{ duration: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-[0.1em] uppercase text-balance">
            <span className="gradient-text">Chapter IV: Missions</span>
          </h2>
          <p className="text-xl text-cosmic-light max-w-2xl mx-auto tracking-wide">
            Projects completed with measurable impact
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 z-20 p-3 rounded-full bg-cosmic-black/50 border border-cosmic-blue/30 hover:border-cosmic-blue/60 transition-[border-color,background-color] duration-300 group"
            style={{
              boxShadow: '0 0 15px rgba(74, 124, 247, 0.2)'
            }}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} className="text-cosmic-blue group-hover:text-cosmic-light transition-colors" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-4 z-20 p-3 rounded-full bg-cosmic-black/50 border border-cosmic-blue/30 hover:border-cosmic-blue/60 transition-[border-color,background-color] duration-300 group"
            style={{
              boxShadow: '0 0 15px rgba(74, 124, 247, 0.2)'
            }}
            aria-label="Next project"
          >
            <ChevronRight size={24} className="text-cosmic-blue group-hover:text-cosmic-light transition-colors" />
          </button>

          {/* Project Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <div className="gradient-border">
                <div className="gradient-border-content">
                  {/* Mission Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                    <div className="flex items-start gap-6">
                      {/* Mission Number */}
                      <div 
                        className="text-6xl font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-300 text-cosmic-blue"
                      >
                        /{project.mission}
                      </div>
                      <div>
                        <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-wide">
                          {project.title}
                        </h3>
                        <p className="text-cosmic-gray text-lg">{project.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Status Badge + GitHub Link */}
                    <div className="flex items-center gap-3">
                      <div 
                        className="px-4 py-2 rounded-lg text-sm font-bold tracking-wider uppercase"
                        style={{
                          backgroundColor: 'rgba(74, 124, 247, 0.1)',
                          border: '1px solid rgba(74, 124, 247, 0.5)',
                          color: '#4A7CF7',
                          boxShadow: '0 0 15px rgba(74, 124, 247, 0.2)'
                        }}
                      >
                        {project.status}
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                          style={{
                            backgroundColor: 'rgba(74, 124, 247, 0.05)',
                            border: '1px solid rgba(74, 124, 247, 0.3)',
                            color: '#4A7CF7'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(74, 124, 247, 0.2)'
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(74, 124, 247, 0.3)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(74, 124, 247, 0.05)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        >
                          <ExternalLink size={14} />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Image */}
                  {project.image && (
                    <div className="mb-8 w-full md:w-1/2 mx-auto rounded-lg overflow-hidden bg-cosmic-dark/50 border border-cosmic-blue/20 aspect-video relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Problem & Solution */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2 tracking-wide">
                        <span 
                          className="w-2 h-2 rounded-full bg-cosmic-blue"
                        />
                        {project.problem.title}
                      </h4>
                      <p className="text-cosmic-light leading-relaxed font-light">
                        {project.problem.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2 tracking-wide">
                        <span 
                          className="w-2 h-2 rounded-full bg-cosmic-blue"
                        />
                        {project.solution.title}
                      </h4>
                      <p className="text-cosmic-light leading-relaxed font-light">
                        {project.solution.description}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 tracking-wide">
                      Equipment List:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 rounded-lg text-sm font-medium"
                          style={{
                            backgroundColor: 'rgba(74, 124, 247, 0.1)',
                            border: '1px solid rgba(74, 124, 247, 0.3)',
                            color: '#4A7CF7'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 tracking-wide">
                      Mission Impact:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.impact.map((impact, impactIndex) => {
                        const ImpactIcon = impact.icon
                        return (
                          <div
                            key={impactIndex}
                            className="flex items-center gap-3 p-4 rounded-lg"
                            style={{
                              backgroundColor: 'rgba(74, 124, 247, 0.05)',
                              border: '1px solid rgba(74, 124, 247, 0.2)'
                            }}
                          >
                            <ImpactIcon
                              size={20}
                              className="text-cosmic-blue"
                            />
                            <span className="text-cosmic-light font-light">{impact.text}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`size-3 rounded-full transition-[background-color,transform] duration-300 ${
                  index === currentProject
                    ? 'bg-cosmic-blue scale-125'
                    : 'bg-cosmic-gray/30 hover:bg-cosmic-gray/50'
                }`}
                style={{
                  boxShadow: index === currentProject ? '0 0 10px rgba(74, 124, 247, 0.5)' : 'none'
                }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
