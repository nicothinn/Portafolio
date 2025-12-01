import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MessageCircle, ArrowRight, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const CTA = () => {
  const [emailCopied, setEmailCopied] = useState(false)
  
  const copyEmailToClipboard = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('nicoritabarona@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const openGmail = (e) => {
    e.preventDefault()
    const email = 'nicoritabarona@gmail.com'
    const subject = encodeURIComponent('Contact from Portfolio')
    const body = encodeURIComponent('Hello Nicolas,\n\nI would like to get in touch with you.')
    
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
      '_blank'
    )
  }
  const ctaOptions = [
    {
      title: "Let's Talk About Your Architecture",
      description: "Let's discuss how I can help you build a scalable data infrastructure.",
      icon: ArrowRight,
    },
    {
      title: "Let's Build Your Pipeline",
      description: "Let's transform your data into products and automated decisions.",
      icon: ArrowRight,
    },
    {
      title: 'Schedule a Meeting',
      description: "Let's reserve time to understand your needs and objectives.",
      icon: MessageCircle,
    },
  ]

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:nicoritabarona@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Nicolas,',
      color: 'electric-blue',
      isEmail: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nicolas-pe%C3%B1a-1ab37b27a/',
      color: 'electric-blue',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/nicothinn',
      color: 'data-green',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/573026643175',
      color: 'data-green',
    },
  ]

  return (
    <section
      id="contact"
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Let&apos;s Talk</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Ready to transform your data into valuable products? I'm here to help you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <motion.a
                key={index}
                href="#contact"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="gradient-border block"
              >
                <div className="gradient-border-content text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-electric-blue/10 mb-4">
                    <Icon size={24} className="text-electric-blue" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{option.description}</p>
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-8">
            Let&apos;s Connect
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              if (link.isEmail) {
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <motion.button
                      onClick={openGmail}
                      className="flex items-center gap-3 px-6 py-3 rounded-lg transition-colors"
                      style={{
                        backgroundColor: link.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)',
                        border: `1px solid ${link.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.3)' : 'rgba(18, 247, 214, 0.3)'}`,
                        color: link.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = link.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.2)' : 'rgba(18, 247, 214, 0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = link.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{link.label}</span>
                    </motion.button>
                    <motion.button
                      onClick={copyEmailToClipboard}
                      className="flex items-center gap-2 px-4 py-3 rounded-lg transition-colors"
                      style={{
                        backgroundColor: 'rgba(18, 247, 214, 0.1)',
                        border: '1px solid rgba(18, 247, 214, 0.3)',
                        color: '#12F7D6'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Copy email to clipboard"
                    >
                      {emailCopied ? <Check size={18} /> : <Copy size={18} />}
                    </motion.button>
                  </motion.div>
                )
              }
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-lg transition-colors"
                  style={{
                    backgroundColor: link.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)',
                    border: `1px solid ${link.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.3)' : 'rgba(18, 247, 214, 0.3)'}`,
                    color: link.color === 'electric-blue' ? '#0077FF' : '#12F7D6'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = link.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.2)' : 'rgba(18, 247, 214, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = link.color === 'electric-blue' ? 'rgba(0, 119, 255, 0.1)' : 'rgba(18, 247, 214, 0.1)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                  <span className="font-medium">{link.label}</span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

