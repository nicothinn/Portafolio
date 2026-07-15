import { motion } from 'framer-motion'
import { BarChart, Code, Server, Building2, Cloud, Database, Brain, Eye } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: BarChart,
      title: 'BI & Visualization',
      skills: ['Power BI', 'Excel', 'Tableau', 'Looker', 'Metabase', 'Qlik Sense', 'Dash', 'Plotly', 'Superset', 'Grafana'],
    },
    {
      icon: Code,
      title: 'Software Development',
      skills: ['Python', 'SQL', 'JavaScript', 'Node.js', 'R', 'Scala', 'Java', 'TypeScript', 'Go', 'Rust', 'C#'],
    },
    {
      icon: Server,
      title: 'Backend Frameworks',
      skills: ['Spring Boot', 'ASP.NET Core', 'Django', 'FastAPI', 'Flask', 'Express.js', 'NestJS', 'Ruby on Rails', 'Laravel', 'Gin', 'Symfony'],
    },
    {
      icon: Building2,
      title: 'Enterprise Systems & Automation',
      skills: ['SAP ERP', 'Oracle E-Business Suite', 'Microsoft Dynamics 365', 'NetSuite', 'Odoo', 'n8n', 'Zapier', 'Make', 'Salesforce', 'HubSpot'],
    },
    {
      icon: Cloud,
      title: 'DevOps, Cloud & Infrastructure',
      skills: ['Docker', 'Kubernetes', 'Terraform', 'CloudFormation', 'Serverless', 'AWS', 'GCP', 'Azure', 'Jenkins', 'GitLab CI', 'Prometheus', 'Linux', 'Vercel', 'Netlify'],
    },
    {
      icon: Database,
      title: 'Data Engineering & Databases',
      skills: ['SQL', 'NoSQL', 'Data Warehouse', 'Data Lake', 'Delta Lake', 'Spark', 'Kafka', 'Beam', 'Flink', 'Hadoop', 'Databricks', 'MLflow', 'Apache Airflow', 'Snowflake', 'DBT', 'BigQuery'],
    },
    {
      icon: Brain,
      title: 'Statistics, ML Theory & Applied Math',
      skills: ['Applied Statistics & Probability', 'Supervised & Unsupervised Learning', 'Linear & Logistic Regression', 'Random Forest', 'XGBoost', 'SVM', 'CNN', 'RNN', 'Transformers', 'BERT', 'GPT', 'GANs' ],
    },
    {
      icon: Eye,
      title: 'AI, Agents & Computer Vision',
      skills: ['OpenAI API', 'LangChain', 'RAG', 'Embeddings', 'Perplexity', 'DeepSeek-R1', 'Grok', 'ElevenLabs', 'OpenCV', 'PyTorch', 'TensorFlow', 'YOLO', 'Anthropic', 'Hugging Face', 'LlamaIndex', 'Scikit-learn', 'Pinecone'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="skills"
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Nebulosa de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cosmic-blue/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-cosmic-gray/8 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
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
            <span className="gradient-text">Chapter V: Constellation</span>
          </h2>
          <p className="text-xl text-cosmic-light max-w-2xl mx-auto tracking-wide">
            Technologies that shape my solution universe
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-cosmic-dark/50 border border-cosmic-gray/20 rounded-xl p-6 hover:border-cosmic-blue/50 transition-colors group"
                style={{
                  boxShadow: '0 0 15px rgba(74, 124, 247, 0.08)'
                }}
              >
                <div 
                  className="inline-flex items-center justify-center size-12 rounded-lg mb-4"
                  style={{
                    backgroundColor: 'rgba(74, 124, 247, 0.1)'
                  }}
                >
                  <Icon 
                    size={24} 
                    className="text-cosmic-blue"
                  />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-white tracking-wide">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    return (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: 'rgba(74, 124, 247, 0.1)',
                          border: '1px solid rgba(74, 124, 247, 0.3)',
                          color: '#4A7CF7'
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
