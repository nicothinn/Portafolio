import { useRef, useLayoutEffect, useState } from 'react'
import { motion, useTransform } from 'framer-motion'

const ROCKET_HEIGHT = 160

const ScrollRocket = ({ scrollYProgress }) => {
  const trackRef = useRef(null)
  const [trackHeight, setTrackHeight] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setTrackHeight(trackRef.current.offsetHeight)
      }
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    return () => ro.disconnect()
  }, [])

  const rocketY = useTransform(
    scrollYProgress,
    [0, 1],
    [Math.max(trackHeight - ROCKET_HEIGHT, 0), 0]
  )

  return (
    <div ref={trackRef} className="absolute inset-0 flex flex-col items-center">
      {/* Línea de la pista */}
      <div className="absolute top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-cosmic-blue/40 via-50% to-transparent" />


      {/* Puntos decorativos */}
      {[0.1, 0.3, 0.5, 0.7, 0.9].map((pos, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-cosmic-blue/25"
          style={{ top: `${pos * 100}%`, transform: 'translate(-50%, -50%)' }}
        />
      ))}

      {trackHeight > 0 && (
        <motion.div
          className="absolute left-1/2 z-10"
          style={{ top: rocketY, x: '-50%' }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            {/* === SATURN V STYLE ROCKET === */}
            <svg
              viewBox="0 0 120 450"
              width="50"
              className="drop-shadow-xl relative z-10 overflow-visible"
              style={{ filter: 'drop-shadow(0 0 15px rgba(74,124,247,0.3))' }}
            >
              <defs>
                {/* Gradientes */}
                <linearGradient id="whiteBody" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#e8e8e8" />
                  <stop offset="30%" stopColor="#ffffff" />
                  <stop offset="70%" stopColor="#f5f5f5" />
                  <stop offset="100%" stopColor="#d0d0d0" />
                </linearGradient>

                <linearGradient id="blackSection" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1a1a1a" />
                  <stop offset="50%" stopColor="#2a2a2a" />
                  <stop offset="100%" stopColor="#0a0a0a" />
                </linearGradient>

                <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="10%" stopColor="#ffdd44" />
                  <stop offset="30%" stopColor="#ff8800" />
                  <stop offset="60%" stopColor="#ff4400" />
                  <stop offset="100%" stopColor="rgba(255,68,0,0)" />
                </linearGradient>

                <radialGradient id="engineGlow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#ffcc00" />
                  <stop offset="50%" stopColor="#ff6600" />
                  <stop offset="100%" stopColor="rgba(255,102,0,0)" />
                </radialGradient>

                <filter id="flameBlur">
                  <feGaussianBlur stdDeviation="2" />
                </filter>
              </defs>

              {/* === ESTRELLAS DE FONDO === */}
              <circle cx="20" cy="50" r="0.8" fill="#fff" opacity="0.6" />
              <circle cx="100" cy="80" r="0.6" fill="#fff" opacity="0.4" />
              <circle cx="15" cy="150" r="0.7" fill="#fff" opacity="0.5" />
              <circle cx="105" cy="200" r="0.5" fill="#fff" opacity="0.3" />
              <circle cx="25" cy="280" r="0.6" fill="#fff" opacity="0.4" />

              {/* === ANILLOS ORBITALES === */}
              <ellipse
                cx="60"
                cy="120"
                rx="45"
                ry="12"
                fill="none"
                stroke="rgba(74,124,247,0.15)"
                strokeWidth="0.5"
                transform="rotate(-15 60 120)"
              />
              <ellipse
                cx="60"
                cy="120"
                rx="50"
                ry="15"
                fill="none"
                stroke="rgba(74,124,247,0.1)"
                strokeWidth="0.3"
                transform="rotate(-15 60 120)"
              />

              {/* === LLAMA ORGÁNICA === */}
              <g filter="url(#flameBlur)">
                <path
                  d="M45 380 Q50 390 48 400 Q45 410 50 420 Q55 430 52 440 Q58 445 60 435 Q62 445 68 440 Q65 430 70 420 Q75 410 72 400 Q70 390 75 380 Z"
                  fill="url(#flameGrad)"
                  opacity="0.9"
                />
                <path
                  d="M50 380 Q53 388 52 395 Q50 405 54 415 Q57 425 55 432 Q59 435 60 428 Q61 435 65 432 Q63 425 66 415 Q70 405 68 395 Q67 388 70 380 Z"
                  fill="#ffaa00"
                  opacity="0.7"
                />
              </g>

              {/* === 5 MOTORES === */}
              <g>
                {/* Motor central */}
                <ellipse cx="60" cy="378" rx="4" ry="2" fill="#333" stroke="#555" strokeWidth="0.5" />
                <ellipse cx="60" cy="376" rx="3" ry="1.5" fill="url(#engineGlow)" opacity="0.8" />
                
                {/* Motores laterales */}
                <ellipse cx="50" cy="376" rx="3" ry="1.5" fill="#333" stroke="#555" strokeWidth="0.5" />
                <ellipse cx="50" cy="374" rx="2" ry="1" fill="url(#engineGlow)" opacity="0.7" />
                
                <ellipse cx="70" cy="376" rx="3" ry="1.5" fill="#333" stroke="#555" strokeWidth="0.5" />
                <ellipse cx="70" cy="374" rx="2" ry="1" fill="url(#engineGlow)" opacity="0.7" />
                
                <ellipse cx="55" cy="377" rx="2.5" ry="1.2" fill="#333" stroke="#555" strokeWidth="0.5" />
                <ellipse cx="55" cy="375" rx="1.5" ry="0.8" fill="url(#engineGlow)" opacity="0.6" />
                
                <ellipse cx="65" cy="377" rx="2.5" ry="1.2" fill="#333" stroke="#555" strokeWidth="0.5" />
                <ellipse cx="65" cy="375" rx="1.5" ry="0.8" fill="url(#engineGlow)" opacity="0.6" />
              </g>

              {/* === ALETAS (4) === */}
              {/* Aleta izquierda */}
              <path d="M45 340 L30 370 L45 365 Z" fill="url(#blackSection)" stroke="#111" strokeWidth="0.5" />
              {/* Aleta derecha */}
              <path d="M75 340 L90 370 L75 365 Z" fill="url(#blackSection)" stroke="#111" strokeWidth="0.5" />
              {/* Aleta frontal */}
              <path d="M58 345 L60 375 L62 345 Z" fill="url(#blackSection)" stroke="#111" strokeWidth="0.3" opacity="0.8" />
              {/* Aleta trasera */}
              <path d="M58 345 L60 375 L62 345 Z" fill="url(#blackSection)" stroke="#111" strokeWidth="0.3" opacity="0.6" />

              {/* === ETAPA S-IC (primera etapa) === */}
              <rect x="45" y="280" width="30" height="95" fill="url(#whiteBody)" stroke="#999" strokeWidth="0.5" />
              
              {/* Franja negra inferior */}
              <rect x="45" y="340" width="30" height="35" fill="url(#blackSection)" />
              
              {/* Texto "USA" en rojo */}
              <text x="52" y="360" fill="#cc0000" fontSize="6" fontWeight="bold" fontFamily="Arial">USA</text>
              <text x="66" y="360" fill="#cc0000" fontSize="6" fontWeight="bold" fontFamily="Arial">USA</text>

              {/* Bandera americana */}
              <g transform="translate(48, 310)">
                <rect x="0" y="0" width="8" height="5" fill="#fff" stroke="#ccc" strokeWidth="0.2" />
                <rect x="0" y="0" width="8" height="0.8" fill="#cc0000" />
                <rect x="0" y="1.6" width="8" height="0.8" fill="#cc0000" />
                <rect x="0" y="3.2" width="8" height="0.8" fill="#cc0000" />
                <rect x="0" y="0" width="3" height="2.5" fill="#000066" />
              </g>

              {/* Texto "APOLLO 11 MISSION" */}
              <text x="60" y="315" fill="#333" fontSize="3" fontFamily="Arial" textAnchor="middle">APOLLO 11</text>
              <text x="60" y="320" fill="#333" fontSize="3" fontFamily="Arial" textAnchor="middle">MISSION</text>

              {/* === INTERSTAGE S-II === */}
              <rect x="45" y="260" width="30" height="20" fill="url(#blackSection)" />

              {/* === ETAPA S-II (segunda etapa) === */}
              <rect x="47" y="200" width="26" height="60" fill="url(#whiteBody)" stroke="#999" strokeWidth="0.5" />
              
              {/* Texto "SATURN V" vertical */}
              <text x="60" y="240" fill="#000" fontSize="5" fontWeight="bold" fontFamily="Arial" textAnchor="middle" transform="rotate(-90 60 240)">SATURN V</text>
              
              {/* Texto "APOLLO" en rojo */}
              <text x="60" y="220" fill="#cc0000" fontSize="4" fontWeight="bold" fontFamily="Arial" textAnchor="middle">APOLLO</text>

              {/* === INTERSTAGE S-IVB === */}
              <rect x="47" y="180" width="26" height="20" fill="url(#blackSection)" />

              {/* === ETAPA S-IVB (tercera etapa) === */}
              <rect x="50" y="140" width="20" height="40" fill="url(#whiteBody)" stroke="#999" strokeWidth="0.5" />
              
              {/* Círculo azul (NASA-style) */}
              <circle cx="60" cy="160" r="5" fill="#4A7CF7" stroke="#333" strokeWidth="0.3" />

              {/* === MÓDULO DE COMANDO/SERVICIO === */}
              <rect x="52" y="100" width="16" height="40" fill="url(#whiteBody)" stroke="#999" strokeWidth="0.5" />
              
              {/* Franja negra */}
              <rect x="52" y="120" width="16" height="8" fill="url(#blackSection)" />

              {/* === TORRE DE ESCAPE === */}
              <g>
                {/* Base de la torre */}
                <rect x="56" y="90" width="8" height="10" fill="url(#whiteBody)" stroke="#999" strokeWidth="0.5" />
                {/* Torre principal */}
                <line x1="60" y1="90" x2="60" y2="60" stroke="#ccc" strokeWidth="1" />
                {/* Punta */}
                <line x1="60" y1="60" x2="60" y2="50" stroke="#aaa" strokeWidth="0.8" />
                <circle cx="60" cy="50" r="1" fill="#888" />
                {/* Soportes de la torre */}
                <line x1="60" y1="85" x2="55" y2="90" stroke="#999" strokeWidth="0.5" />
                <line x1="60" y1="85" x2="65" y2="90" stroke="#999" strokeWidth="0.5" />
              </g>

              {/* === DETALLES ADICIONALES === */}
              {/* Líneas de panel en el cuerpo */}
              <line x1="45" y1="300" x2="75" y2="300" stroke="rgba(0,0,0,0.1)" strokeWidth="0.3" />
              <line x1="45" y1="320" x2="75" y2="320" stroke="rgba(0,0,0,0.1)" strokeWidth="0.3" />
              <line x1="47" y1="220" x2="73" y2="220" stroke="rgba(0,0,0,0.1)" strokeWidth="0.3" />
              <line x1="47" y1="240" x2="73" y2="240" stroke="rgba(0,0,0,0.1)" strokeWidth="0.3" />
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* Brillo alrededor del cohete */}
      {trackHeight > 0 && (
        <motion.div
          className="absolute left-1/2 z-0 pointer-events-none"
          style={{ top: rocketY, x: '-50%' }}
        >
          <div
            className="w-28 h-28 -translate-y-1/2 -translate-x-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(74,124,247,0.1) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      )}
    </div>
  )
}

export default ScrollRocket
