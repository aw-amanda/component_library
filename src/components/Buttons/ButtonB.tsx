// Gradient Wave Buttons
import React from "react"

export interface ButtonBProps {
    buttonVariant: "B1" | "B2" | "B3" | "B4" | "B5" | "B6" | "B7" | "B8" | "B9" | "B10"
    buttonText: string
    buttonLinkUrl: string
}

const variantBackgrounds = {
    // Rainbow
    B1: "linear-gradient(45deg, rgb(255, 0, 0), rgb(207, 0, 0), rgb(217, 90, 0), rgb(255, 106, 0), rgb(255, 225, 0), rgb(227, 201, 2), rgb(11, 230, 0), rgb(10, 201, 0), rgb(0, 182, 207), rgb(0, 224, 255), rgb(38, 0, 255), rgb(29, 0, 196), rgb(119, 0, 255), rgb(94, 0, 201))",
    // Purple
    B2: "linear-gradient(45deg, rgb(65, 26, 117), rgb(111, 52, 191), rgb(180, 142, 232), rgb(149, 95, 222), rgb(65, 26, 117))",
    // Teal
    B3: "linear-gradient(45deg, rgb(0, 36, 32), rgb(0, 36, 32), rgb(1, 51, 45), rgb(156, 240, 230), rgb(0, 36, 32), rgb(0, 36, 32))",
    // Blue
    B4: "linear-gradient(45deg, rgb(2, 161, 189), rgb(14, 173, 201), rgb(153, 233, 255), rgb(2, 161, 189))",
    // Pink
    B5: "linear-gradient(45deg, rgb(199, 2, 196), rgb(235, 56, 232), rgb(255, 153, 253), rgb(235, 56, 232), rgb(199, 2, 196))",
    // Green
    B6: "linear-gradient(45deg, rgb(23, 87, 29), rgb(44, 125, 51), rgb(173, 204, 176), rgb(44, 125, 51), rgb(23, 87, 29))",
    // Yellow
    B7: "linear-gradient(45deg, rgb(242, 250, 22), rgb(242, 247, 87), rgb(252, 255, 150), rgb(242, 247, 87), rgb(242, 250, 22))",
    // Orange
    B8: "linear-gradient(45deg, rgb(255, 145, 0), rgb(201, 115, 0), rgb(252, 193, 114), rgb(201, 115, 0), rgb(255, 145, 0))",
    // Dark Blue
    B9: "linear-gradient(45deg, rgb(0, 0, 107), rgb(2, 2, 161), rgb(133, 153, 255), rgb(2, 2, 161), rgb(0, 0, 107))",
    // Red
    B10: "linear-gradient(45deg, rgb(255, 0, 0), rgb(255, 31, 31), rgb(255, 143, 143), rgb(255, 31, 31), rgb(255, 0, 0))",
}

export const ButtonB = ({ buttonVariant, buttonText, buttonLinkUrl }: ButtonBProps) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [backgroundPosition, setBackgroundPosition] = React.useState({ x: 0, y: 0 })
    const [isReversing, setIsReversing] = React.useState(false)
    const animationRef = React.useRef<number | undefined>(undefined)

    React.useEffect(() => {
        const animateGradient = () => {
            setBackgroundPosition(prev => {
                const speed = isHovered ? 0.5 : 0.1
                const direction = isReversing ? -1 : 1

                let newX = prev.x + (speed * direction)
                let newY = prev.y + (speed * direction)

                if (newX >= 100 || newX <= 0) {
                    setIsReversing(!isReversing)
                }

                newX = Math.max(0, Math.min(100, newX))
                newY = Math.max(0, Math.min(100, newY))
                
                return { x: newX, y: newY }
            })
            animationRef.current = requestAnimationFrame(animateGradient)
        }
        animationRef.current = requestAnimationFrame(animateGradient)
        
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isHovered, isReversing])

const buttonBStyles: React.CSSProperties = {
    padding: 'calc(0.53rem + 0.4vh) calc(1rem + 0.5vw)',
    gap: '1em',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    outline: 'none',
    fontWeight: 500,
    color: 'inherit',
    textShadow: '0 0 2px currentColor',
    background: variantBackgrounds[buttonVariant],
    backgroundSize: '200% 200%',
    backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
    boxShadow: '0 0 5px 3px rgba(255, 255, 255, 0.3)',
    border: 'none',
    borderRadius: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
}

const gradientWave: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: `${(backgroundPosition.x - 100)}%`,
    right: 0,
    bottom: 0,
    background: variantBackgrounds[buttonVariant],
    backgroundPosition: `${100 - backgroundPosition.x}% ${100 - backgroundPosition.y}%`,
    filter: 'brightness(1.2) contrast(1.2)',
    zIndex: 1,
    opacity: 0.7,
    width: '200%',
    height: '200%',
}

const buttonBHover: React.CSSProperties = {
    boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.5',
}

const linkStyle: React.CSSProperties = {
    fontSize: 'clamp(0.7rem, 1.2rem, 1.5rem)',
    fontFamily: 'inherit',
    color: 'inherit',
    textDecoration: 'none',
    position: 'relative',
    zIndex: 2,
}

    return(
        <div style={{ padding: '1rem', position: 'relative', display: 'inline-block' }}>
            <button
                id={buttonVariant}
                style={{
                    ...buttonBStyles,
                    ...(isHovered ? buttonBHover : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={gradientWave}></div>
                <a href={buttonLinkUrl} style={linkStyle} target="_blank" rel="noopener noreferrer">
                    {buttonText}
                </a>
            </button>
        </div>
    )
}

export const ButtonBVariants = () => {
    return(
        <div style={{
            maxWidth: '90vw',
            height: '95dvh',
            margin: '0 auto',
            padding: '2em',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            placeContent: 'center',
            placeItems: 'center',
            gap: '1em',
            backgroundColor: 'rgb(0, 0, 0)',
            }}
        >
            {Object.keys(variantBackgrounds).map((variant) => (
                <ButtonB
                    key={variant}
                    buttonText={`Button ${variant}`} 
                    buttonVariant={variant as ButtonBProps["buttonVariant"]}
                    buttonLinkUrl=""
                />
            ))}
        </div>
    )
}