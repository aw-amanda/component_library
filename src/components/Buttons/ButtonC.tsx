// Glass Buttons
import React from "react"

export interface ButtonCProps {
    buttonText: string
    buttonVariant: "C1" | "C2" | "C3" | "C4" | "C5"
    buttonLinkUrl: string
}

const buttonCStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
    outline: 'none',
    backdropFilter: 'saturate(150%)',
    border: 'none',
    borderRadius: '1rem',
    transition: 'all 0.3s ease',
    zIndex: 1,
}

const buttonCoverlay: React.CSSProperties = {
    display: 'inline-block',
    gap: '1em',
    position: 'relative',
    overflow: 'hidden',
    outline: 'none',
    backgroundColor: 'rgba(105, 105, 105, 0.15)',
    backdropFilter: 'blur(50px)',
    color: 'rgb(255, 255, 255)',
    fontWeight: 500,
    textShadow: '0 0 2px rgba(255, 255, 255, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.7)',
    borderRadius: '1rem',
    boxShadow: 'inset 0 0 1px 1px rgba(235, 235, 235, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 2,
}

const buttonCHover: React.CSSProperties = {
    backgroundColor: 'transparent',
    boxShadow: 'inset 0 0 1px 1px rgba(140, 140, 140, 0.9)',
    transform: 'translateY(-4px)',
}

const linkStyle: React.CSSProperties = {
    padding: 'calc(0.53rem + 0.4vh) calc(1rem + 0.5vw)',
    fontSize: 'clamp(0.7rem, 1.2rem, 1.5rem)',
    fontFamily: 'inherit',
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
}

const variantColors = {
    C1: 'linear-gradient(45deg, rgba(227, 227, 227, 0.3), rgba(105, 105, 105, 0.2), rgba(227, 227, 227, 0.3))',
    C2: 'linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(17, 17, 18, 0.7), rgba(40, 40, 41, 0.7), rgba(0, 0, 0, 0.7))',
    C3: 'rgba(255, 255, 255, 0.2)',
    C4: 'rgba(0, 0, 0, 0.8)',
    C5: 'linear-gradient(110deg, rgba(3, 79, 74, 0.9), rgba(5, 133, 124, 0.4), rgba(255, 255, 255, 0.2), rgba(135, 52, 148, 0.4), rgba(93, 35, 102, 0.9))',
}

export const ButtonC = ({ buttonText, buttonVariant, buttonLinkUrl }: ButtonCProps) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const color = variantColors[buttonVariant]

    return(
        <div style={{ padding: '1rem' }}>
            <div style={{
                        ...buttonCoverlay,
                        ...(isHovered ? buttonCHover : {}),
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
            >
                <button
                    className="buttonC"
                    id={buttonVariant}
                    style={{
                        ...buttonCStyles,
                        background: color,
                    }}  
                >
                    <a href={buttonLinkUrl} style={linkStyle} target="_blank" rel="noopener noreferrer">
                        {buttonText}
                    </a>
                </button>
            </div>
        </div>
    )
}

export const ButtonCVariants = () => {
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
                <ButtonC
                    key={variant}
                    buttonText={`Button ${variant}`} 
                    buttonVariant={variant as ButtonCProps["buttonVariant"]}
                    buttonLinkUrl=""
                />
            ))}
        </div>
    )
}