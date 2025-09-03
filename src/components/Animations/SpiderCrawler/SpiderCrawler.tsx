import { useEffect, useRef } from "react"

interface Dot {
    x: number
    y: number
    size: number
    color: string
}

export const SpiderCrawlerCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const bannerRef = useRef<HTMLDivElement>(null)
    const dotsRef = useRef<Dot[]>([])
    const arrayColors = ['#b6201d', '#da6f10', '#f1f64d', '#66e518', '#18b6e5', '#9161d1']

    useEffect(() => {
        const canvas = canvasRef.current
        const banner = bannerRef.current
        if (!canvas || !banner) return

        const setCanvasSize = () => {
            const rect = banner.getBoundingClientRect()
            canvas.width = rect.width
            canvas.height = rect.height
        }

        setCanvasSize()

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const initializeDots = () => {
            dotsRef.current = []
            for (let index = 0; index < 50; index++) {
                dotsRef.current.push({
                    x: Math.floor(Math.random() * canvas.width),
                    y: Math.floor(Math.random() * canvas.height),
                    size: Math.random() * 1 + 3,
                    color: arrayColors[Math.floor(Math.random() * 5)]
                })
            }
        }

        initializeDots()

        const drawDots = () => {
            dotsRef.current.forEach(dot => {
                ctx.fillStyle = dot.color
                ctx.beginPath()
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
                ctx.fill()
            })
        }

        drawDots()

        const handleMouseMove = (event: MouseEvent) => {
            const rect = banner.getBoundingClientRect()
            const mouse = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            drawDots()

            dotsRef.current.forEach(dot => {
                const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2)
                if (distance < 300) {
                    ctx.strokeStyle = dot.color
                    ctx.lineWidth = 1
                    ctx.beginPath()
                    ctx.moveTo(dot.x, dot.y)
                    ctx.lineTo(mouse.x, mouse.y)
                    ctx.stroke()
                }
            })
        }

        const handleMouseOut = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            drawDots()
        }

        const handleResize = () => {
            setCanvasSize()
            initializeDots()
            drawDots()
        }

        banner.addEventListener('mousemove', handleMouseMove)
        banner.addEventListener('mouseout', handleMouseOut)
        window.addEventListener('resize', handleResize)

        return () => {
            banner.removeEventListener('mousemove', handleMouseMove)
            banner.removeEventListener('mouseout', handleMouseOut)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div 
            ref={bannerRef}
            style={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                backgroundColor: 'black',
                margin: 0,
                padding: 0,
                overflow: 'hidden',
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    )
}