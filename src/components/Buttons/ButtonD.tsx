// Flip Buttons
import React from "react"

export interface ButtonDProps {
    buttonText: string
    buttonVariant: "D1" | "D2" | "D3" | "D4" | "D5" | "D6" | "D7" | "D8" | "D9" | "D10"
    buttonLinkUrl: string
}

const buttonDStyles: React.CSSProperties = {
    padding: 'calc(0.53rem + 0.4vh) calc(1rem + 0.5vw)',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    outline: 'none',
    border: '1px solid',
    borderRadius: '1rem',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgb(0, 0, 0)',
    zIndex: 2,
    minWidth: 'max-content',
}

const linkStyle: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 2vmin, 1.25rem)',
    fontFamily: 'inherit',
    color: 'inherit',
    textDecoration: 'none',
    position: 'relative',
    zIndex: 3,
    whiteSpace: 'nowrap',
}

const variantColors = {
    D1: 'rgb(145, 245, 78)',
    D2: 'rgb(135, 67, 243)',
    D3: 'rgb(235, 52, 229)',
    D4: 'rgb(237, 218, 71)',
    D5: 'rgb(255, 112, 23)',
    D6: 'rgb(51, 255, 252)',
    D7: 'rgb(25, 41, 255)',
    D8: 'rgb(161, 55, 111)',
    D9: 'rgb(227, 227, 227)',
    D10: 'rgb(255, 0, 0)',
}

export const ButtonD = ({buttonText, buttonVariant, buttonLinkUrl}: ButtonDProps) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const color = variantColors[buttonVariant]

    const buttonDHover: React.CSSProperties = {
        background: `${color}`,
        transform: 'rotate(360deg)',
        color: 'rgb(0, 0, 0)',
        boxShadow: 'inset 0 0 5px 1px rgba(255, 255, 255, 0.3)',
    }

    return(
        <div 
            style={{ padding: '1rem', position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button 
                className="buttonD"
                id={buttonVariant}
                style={{
                    ...buttonDStyles,
                    color: color,
                    borderColor: color,
                    ...(isHovered ? buttonDHover : {}),
                }}
            >
                <a href={buttonLinkUrl} style={linkStyle} target="_blank" rel="noopener noreferrer">
                    {buttonText}
                </a>
            </button>
        </div>
    )
}

export const ButtonDVariants = () => {
    return (
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
            {Object.keys(variantColors).map((variant) => (
                <ButtonD
                    key={variant}
                    buttonText={`Button ${variant}`} 
                    buttonVariant={variant as ButtonDProps["buttonVariant"]}
                    buttonLinkUrl=""
                />
            ))}
        </div>
    )
}