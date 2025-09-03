import { useEffect, useRef, useCallback } from "react"

interface Star {
  x: number
  y: number
  radius: number
  speedY: number
  speedX: number
  opacity: number
  layer: number
  rotation: number
  rotationSpeed: number
  points: number
  spikes: number
}

interface MousePosition {
  x: number | null
  y: number | null
}

export const FallingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef<MousePosition>({ x: null, y: null })
  const starsRef = useRef<Star[]>([])
  const animationFrameId = useRef<number>(null)

  const createStar = useCallback((width: number, height: number, layer = 1): Star => {
    return {
      x: Math.random() * width,
      y: Math.random() * -height,
      radius: Math.random() * (3 / layer) + 1.5,
      speedY: Math.random() * 1.5 * layer + 0.5,
      speedX: Math.random() * 0.6 - 0.3,
      opacity: Math.random() * 0.6 + 0.4,
      layer,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: Math.random() * 0.02 - 0.01,
      points: Math.floor(Math.random() * 3) + 5,
      spikes: Math.random() * 0.3 + 0.4
    }
  }, [])

  const updateStar = useCallback((star: Star, width: number, height: number, mouse: MousePosition) => {
    star.y += star.speedY
    star.x += star.speedX + Math.sin(star.y * 0.01) * 0.5
    star.rotation += star.rotationSpeed

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - star.x
      const dy = mouse.y - star.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 200) {
        const force = (1 - dist / 200) * 0.15
        const angle = Math.atan2(dy, dx) + Math.PI / 2

        star.x += Math.cos(angle) * force * 15
        star.y += Math.sin(angle) * force * 15
      }
    }

    if (star.y > height) {
      Object.assign(star, createStar(width, height, star.layer))
      star.y = 0
    }

    if (star.x > width || star.x < 0) {
      star.x = (star.x + width) % width
    }
  }, [createStar])

  const drawStar = useCallback((ctx: CanvasRenderingContext2D, star: Star) => {
    ctx.save()
    ctx.translate(star.x, star.y)
    ctx.rotate(star.rotation)
    
    ctx.beginPath()
    
    for (let i = 0; i < star.points * 2; i++) {
      const angle = (i * Math.PI) / star.points
      const radius = i % 2 === 0 ? star.radius : star.radius * star.spikes
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    
    ctx.closePath()
    
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, star.radius * 2)
    gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
    gradient.addColorStop(0.5, `rgba(250, 238, 132, ${star.opacity * 0.8})`)
    gradient.addColorStop(1, `rgba(255, 251, 212, 0.3)`)

    ctx.fillStyle = gradient
    ctx.fill()
    
    ctx.shadowBlur = 15
    ctx.shadowColor = `rgba(255, 251, 212, ${star.opacity * 0.6})`
    ctx.fill()
    
    ctx.restore()
  }, [])

  const drawBackground = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, 'rgb(0, 0, 0)')
    gradient.addColorStop(0.3, 'rgb(0, 7, 28)')
    gradient.addColorStop(0.6, 'rgb(1, 4, 48)') 
    gradient.addColorStop(1, 'rgb(0, 15, 61)')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const createStars = () => {
      starsRef.current = [
        ...Array(80).fill(null).map(() => createStar(width, height, 1)),
        ...Array(40).fill(null).map(() => createStar(width, height, 2)),
        ...Array(20).fill(null).map(() => createStar(width, height, 3))
      ]
    }

    createStars()

    const animate = () => {
      drawBackground(ctx, width, height)

      starsRef.current.forEach(star => {
        updateStar(star, width, height, mouseRef.current)
        drawStar(ctx, star)
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [createStar, updateStar, drawStar, drawBackground])

  return (
    <div 
        id="fallings-stars-canvas"
        style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
        }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          filter: 'blur(1px)'
        }}
      />
    </div>
  )
}