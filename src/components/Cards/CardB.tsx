import React from "react"

export interface CardBProps {
    img?: string
    alt?: string
    text?: string
    color: "light" | "dark"
    variant: "B1" | "B2" | "B3" | "B4"
}

const cardVariant = {
    // Rainbow
    B1: "linear-gradient(45deg, rgb(255, 0, 0), rgb(207, 0, 0), rgb(217, 90, 0), rgb(255, 106, 0), rgb(255, 225, 0), rgb(227, 201, 2), rgb(11, 230, 0), rgb(10, 201, 0), rgb(0, 182, 207), rgb(0, 224, 255), rgb(38, 0, 255), rgb(29, 0, 196), rgb(119, 0, 255), rgb(94, 0, 201))",
    // Purple
    B2: "linear-gradient(45deg, rgb(65, 26, 117), rgb(111, 52, 191), rgb(180, 142, 232), rgb(149, 95, 222), rgb(65, 26, 117))",
    // Teal
    B3: "linear-gradient(45deg, rgb(0, 36, 32), rgb(0, 36, 32), rgb(1, 51, 45), rgb(156, 240, 230), rgb(0, 36, 32), rgb(0, 36, 32))",
    // Blue
    B4: "linear-gradient(45deg, rgb(2, 161, 189), rgb(14, 173, 201), rgb(153, 233, 255), rgb(2, 161, 189))",
}

const outerDiv: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
}

export const CardB = ({ img, alt, text, color, variant }: CardBProps) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [backgroundPosition, setBackgroundPosition] = React.useState(50)
    const animationRef = React.useRef<number | null>(null)
    const startTimeRef = React.useRef<number | null>(null)

    React.useEffect(() => {
        const animateGradient = (timestamp: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp
            }

            const elapsed = timestamp - startTimeRef.current
            const speed = isHovered ? 0.0005 : 0.0002
            const progress = elapsed * speed
            
            const position = 50 * (1 + Math.sin(progress * Math.PI))
            
            setBackgroundPosition(position)
            animationRef.current = requestAnimationFrame(animateGradient)
        }

        animationRef.current = requestAnimationFrame(animateGradient)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
            startTimeRef.current = null
        }
    }, [isHovered])

    const Card: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        width: '100%',
        minHeight: '400px',
        maxWidth: '500px',
        margin: '0 auto',
        aspectRatio: '2/3',
        padding: '1.5rem',
        border: 'none',
        borderRadius: '1rem',
        boxShadow: 'inset 0 0 3px rgba(255, 255, 255, 0.5)',
        backdropFilter: 'saturation(180%)',
        overflow: 'hidden',
        background: cardVariant[variant],
        backgroundSize: '300% 300%',
        backgroundPosition: `${backgroundPosition}% 50%`,
        transition: 'background-position 0.1s ease',
    }

    const imgStyles: React.CSSProperties = {
        width: '90%',
        height: '70%',
        margin: '1rem 0',
        objectFit: 'cover',
        borderRadius: '1rem',
        opacity: 0.75,
    }

    const textStyles: React.CSSProperties = {
        color: color === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
        textShadow: color === 'light' ? '0 1px 2px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(255, 255, 255, 0.5)',
        fontSize: 'clamp(1rem, 2vw, 2rem)',
        textAlign: 'center',
        fontFamily: 'inherit',
    }

    return (
        <div
            style={outerDiv}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={Card}>
                {img && (
                    <img
                        src={img}
                        alt={alt}
                        style={imgStyles}
                    />
                )}
                {text && (
                    <span style={textStyles}>
                        {text}
                    </span>
                )}
            </div>
        </div>
    )
}