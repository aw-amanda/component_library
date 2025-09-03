// Glow buttons

import React from "react"

export interface ButtonAProps {
    buttonText: string
    buttonVariant: "A1" | "A2" | "A3" | "A4" | "A5" | "A6" | "A7" | "A8" | "A9" | "A10"
    buttonLinkUrl: string
}

const buttonAStyles: React.CSSProperties = {
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
    background: 'transparent',
    boxShadow: 'inset 0 0 5px 1px currentColor, 0 0 5px 3px rgba(0, 0, 0, 0.3), 0 0 5px 3px currentColor',
    border: '2px solid',
    borderColor: 'inherit',
    borderRadius: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
}

const buttonAHover: React.CSSProperties = {
    transform: 'translateY(-2px)',
    boxShadow: 'inset 0 0 6px 1px currentColor, 0 0 10px 5px rgba(255, 255, 255, 0.2), 0 0 10px 5px currentColor',
    textShadow: '0 0 2px rgba(255, 255, 255, 0.1), 0 0 2px currentColor',
}

const linkStyle: React.CSSProperties = {
    fontSize: 'clamp(0.7rem, 1.2rem, 1.5rem)',
    fontFamily: 'inherit',
    color: 'inherit',
    textDecoration: 'none',
}

const variantColors = {
    A1: "rgb(255, 0, 149)",
    A2: "rgb(229, 255, 0)",
    A3: "rgb(0, 255, 255)",
    A4: "rgb(43, 255, 0)",
    A5: "rgb(0, 195, 255)",
    A6: "rgb(140, 0, 255)",
    A7: "rgb(89, 0, 255)",
    A8: "rgb(0, 38, 255)",
    A9: "rgb(255, 145, 0)",
    A10: "rgb(255, 8, 0)",
}

export const ButtonA = ({ buttonText, buttonVariant, buttonLinkUrl }: ButtonAProps) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const color = variantColors[buttonVariant]

    return (
        <div style={{ padding: '1rem' }}>
            <button
                className="buttonA"
                id={buttonVariant}
                style={{
                    ...buttonAStyles,
                    color,
                    borderColor: color,
                    ...(isHovered ? buttonAHover : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a href={buttonLinkUrl} style={linkStyle} target="_blank" rel="noopener noreferrer">
                    {buttonText}
                </a>
            </button>
        </div>
    )
}

export const ButtonAVariants = () => {
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
            {Object.keys(variantColors).map((variant) => (
                <ButtonA
                    key={variant}
                    buttonText={`Button ${variant}`} 
                    buttonVariant={variant as ButtonAProps["buttonVariant"]}
                    buttonLinkUrl=""
                />
            ))}
        </div>
    )
}