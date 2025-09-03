// Zoom Card

import React, { useState } from 'react';

export interface CardCProps {
    title?: string
    img?: string
    alt?: string
    text: string
    color: "light" | "dark"
    variant: "C1" | "C2" | "C3" | "C4"
}

const outerDiv: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
}

const cardVariant = {
    C1: 'rgb(0, 0, 0)',
    C2: 'rgb(255, 255, 255)',
    C3: 'rgb(2, 67, 77)',
    C4: 'rgb(214, 210, 133)',
}

const cardStyles: React.CSSProperties = {
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 200ms ease-in-out',
    alignItems: 'center',
    justifyItems: 'center',
    width: '100%',
    minHeight: '400px',
    maxWidth: '500px',
    aspectRatio: '2/3',
    padding: '1.5rem',
    border: 'none',
    borderRadius: '1rem',
    overflow: 'hidden',
    borderWidth: '1px',
    borderStyle: 'solid',
}

const imgStyles: React.CSSProperties = {
    objectFit: 'cover',
    objectPosition: 'top',
    transition: 'all 150ms ease-in-out',
    position: 'relative',
    width: '90%',
    height: '60%',
    margin: '0.5rem',
    borderRadius: '1rem',
}

const hoverImgStyles: React.CSSProperties = {
    transform: 'scale(2.5)',
}


export const CardC = ({ title, img, alt, text, variant, color }: CardCProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const titleStyles: React.CSSProperties = {
        position: 'relative',
        bottom: '0',
        height: '30%',
        fontSize: 'clamp(2rem, 2.5vw, 3rem)',
        fontFamily: 'inherit',
        transition: 'all 150ms ease-in-out',
        display: 'flex',
        alignItems: 'center',
        color: color === 'light' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
        textShadow: color === 'light' ? '0 1px 2px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(255, 255, 255, 0.5)',

    }

    const hoverTitleStyles: React.CSSProperties = {
        bottom: '400px',
        transform: 'scale(1.2)',
        color: color === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
        textShadow: color === 'light' ? '0 1px 2px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(255, 255, 255, 0.5)',
    }

    const textStyles: React.CSSProperties = {
        position: 'relative',
        alignItems: 'center',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 'clamp(1rem, 2vw, 2rem)',
        color: color === 'light' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
        textShadow: color === 'light' ? '0 1px 2px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(255, 255, 255, 0.5)',
    }

    const hoverTextStyles: React.CSSProperties  = {
        color: color === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
        textShadow: color === 'light' ? '0 1px 2px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(255, 255, 255, 0.5)',
    }

    return (
        <div 
            id="card-c"
            style={outerDiv}
        >
            <div 
                style={{...cardStyles, backgroundColor: cardVariant[variant], borderColor: color}}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img 
                    src={img} 
                    alt={alt} 
                    style={{
                        ...imgStyles,
                        ...(isHovered ? hoverImgStyles : {})
                    }} 
                />
                
                <h1 style={{
                    ...titleStyles,
                    ...(isHovered ? hoverTitleStyles : {})
                }}>
                    {title}
                </h1>
                
                <span style={{
                    ...textStyles, 
                    ...(isHovered ? hoverTextStyles : {})
                }}>
                    {text}
                </span>
            </div>
        </div>
    )
}