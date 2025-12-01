import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Navbar scrollY={scrollY} />
      <Hero />
      <WhatIDo />
      <Skills />
      <Experience />
      <Projects />
      <Process />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

