import { motion } from 'framer-motion'
import { BarChart, Code, Server, Building2, Cloud, Database, Brain, Eye } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: BarChart,
      title: 'BI & Visualization',
      skills: ['Power BI', 'Excel', 'Tableau', 'Looker', 'Metabase', 'Qlik Sense', 'Dash', 'Plotly', 'Superset', 'Grafana'],
      color: 'electric-blue',
    },
    {
      icon: Code,
      title: 'Software Development',
      skills: ['Python', 'SQL', 'JavaScript', 'Node.js', 'R', 'Scala', 'Java', 'TypeScript', 'Go', 'Rust', 'C#'],
      color: 'data-green',
    },
    {
      icon: Server,
      title: 'Backend Frameworks',
      skills: ['Spring Boot', 'ASP.NET Core', 'Django', 'FastAPI', 'Flask', 'Express.js', 'NestJS', 'Ruby on Rails', 'Laravel', 'Gin', 'Symfony'],
      color: 'electric-blue',
    },
    {
      icon: Building2,
      title: 'Enterprise Systems & Automation',
      skills: ['SAP ERP', 'Oracle E-Business Suite', 'Microsoft Dynamics 365', 'NetSuite', 'Odoo', 'n8n', 'Zapier', 'Make', 'Salesforce', 'HubSpot'],
      color: 'data-green',
    },
    {
      icon: Cloud,
      title: 'DevOps, Cloud & Infrastructure',
      skills: ['Docker', 'Kubernetes', 'Terraform', 'CloudFormation', 'Serverless', 'AWS', 'GCP', 'Azure', 'Jenkins', 'GitLab CI', 'Prometheus', 'Linux', 'Vercel', 'Netlify'],
      color: 'electric-blue',
    },
    {
      icon: Database,
      title: 'Data Engineering & Databases',
      skills: ['SQL', 'NoSQL', 'Data Warehouse', 'Data Lake', 'Delta Lake', 'Spark', 'Kafka', 'Beam', 'Flink', 'Hadoop', 'Databricks', 'MLflow', 'Apache Airflow', 'Snowflake', 'DBT', 'BigQuery'],
      color: 'data-green',
    },
    {
      icon: Brain,
      title: 'Statistics, ML Theory & Applied Math',
      skills: ['Applied Statistics & Probability', 'Supervised & Unsupervised Learning', 'Linear & Logistic Regression', 'Random Forest', 'XGBoost', 'SVM', 'CNN', 'RNN', 'Transformers', 'BERT', 'GPT', 'GANs' ],
      color: 'electric-blue',
    },
    {
      icon: Eye,
      title: 'AI, Agents & Computer Vision',
      skills: ['OpenAI API', 'LangChain', 'RAG', 'Embeddings', 'Perplexity', 'DeepSeek-R1', 'Grok', 'ElevenLabs', 'OpenCV', 'PyTorch', 'TensorFlow', 'YOLO', 'Anthropic', 'Hugging Face', 'LlamaIndex', 'Scikit-learn', 'Pinecone'],
      color: 'data-green',
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
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Complete technology stack to build world-class data solutions
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
                className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-electric-blue/50 transition-colors"
              >
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                  style={{
                    backgroundColor: category.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)'
                  }}
                >
                  <Icon 
                    size={24} 
                    style={{
                      color: category.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                    }}
                  />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const colorValue = category.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                    return (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: category.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)',
                          border: `1px solid ${category.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.3)' : 'rgba(18, 247, 214, 0.3)'}`,
                          color: colorValue
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
