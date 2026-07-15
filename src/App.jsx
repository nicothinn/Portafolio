import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MissionMetrics from './components/MissionMetrics'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import GalaxyBackground from './components/GalaxyBackground'
import StarField from './components/StarField'
import SpaceSound from './components/SpaceSound'
import WarpSpeed from './components/WarpSpeed'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const scrollRef = useRef(null)
  const locomotiveScroll = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      locomotiveScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.8,
        lerp: 0.05,
        smartphone: {
          smooth: false
        },
        tablet: {
          smooth: false
        }
      })

      locomotiveScroll.current.on('scroll', (args) => {
        setScrollY(args.scroll.y)
      })
    }

    return () => {
      if (locomotiveScroll.current) {
        locomotiveScroll.current.destroy()
      }
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Actualizar Locomotive Scroll después de que el contenido cargue
    setTimeout(() => {
      if (locomotiveScroll.current) {
        locomotiveScroll.current.update()
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Efectos globales */}
      <StarField />
      <SpaceSound />

      <AnimatePresence initial={false}>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <div ref={scrollRef} data-scroll-container className="overflow-x-hidden">
          <Navbar scrollY={scrollY} />
          
          <WarpSpeed index={0}>
            <div data-scroll-section>
              <Hero />
            </div>
          </WarpSpeed>

          <WarpSpeed index={1}>
            <div data-scroll-section>
              <MissionMetrics />
            </div>
          </WarpSpeed>

          <WarpSpeed index={2}>
            <div data-scroll-section>
              <About />
            </div>
          </WarpSpeed>

          <WarpSpeed index={3}>
            <div data-scroll-section>
              <WhatIDo />
            </div>
          </WarpSpeed>

          <WarpSpeed index={4}>
            <div data-scroll-section>
              <Projects />
            </div>
          </WarpSpeed>

          <WarpSpeed index={5}>
            <div data-scroll-section>
              <Skills />
            </div>
          </WarpSpeed>

          <WarpSpeed index={6}>
            <div data-scroll-section>
              <Certifications />
            </div>
          </WarpSpeed>

          <WarpSpeed index={7}>
            <div data-scroll-section>
              <Experience />
            </div>
          </WarpSpeed>

          <WarpSpeed index={8}>
            <div data-scroll-section>
              <Process />
            </div>
          </WarpSpeed>

          <WarpSpeed index={9}>
            <div data-scroll-section>
              <Testimonials />
            </div>
          </WarpSpeed>

          <WarpSpeed index={10}>
            <div data-scroll-section>
              <CTA />
            </div>
          </WarpSpeed>

          <WarpSpeed index={11}>
            <div data-scroll-section>
              <Footer />
            </div>
          </WarpSpeed>
        </div>
      )}
    </div>
  )
}

export default App
