import { useEffect, useRef } from 'react'

const StarField = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const stars = []
    const numStars = 400

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.005
      })
    }

    const meteors = []
    const numMeteors = 2

    const createMeteor = () => {
      return {
        x: Math.random() * canvas.width,
        y: 0,
        length: Math.random() * 60 + 30,
        speed: Math.random() * 8 + 5,
        opacity: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3
      }
    }

    for (let i = 0; i < numMeteors; i++) {
      meteors.push(createMeteor())
    }

    let animationFrameId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        star.opacity += star.twinkleSpeed
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        star.y += star.speed * 0.1
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      meteors.forEach((meteor, index) => {
        if (meteor.opacity <= 0) {
          meteors[index] = createMeteor()
          return
        }

        const gradient = ctx.createLinearGradient(
          meteor.x, meteor.y,
          meteor.x - meteor.length * Math.cos(meteor.angle),
          meteor.y - meteor.length * Math.sin(meteor.angle)
        )
        gradient.addColorStop(0, `rgba(139, 157, 195, ${meteor.opacity})`)
        gradient.addColorStop(1, 'rgba(139, 157, 195, 0)')

        ctx.beginPath()
        ctx.moveTo(meteor.x, meteor.y)
        ctx.lineTo(
          meteor.x - meteor.length * Math.cos(meteor.angle),
          meteor.y - meteor.length * Math.sin(meteor.angle)
        )
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()

        meteor.x += meteor.speed * Math.cos(meteor.angle)
        meteor.y += meteor.speed * Math.sin(meteor.angle)
        meteor.opacity -= 0.01

        if (meteor.x > canvas.width || meteor.y > canvas.height) {
          meteors[index] = createMeteor()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}

export default StarField
