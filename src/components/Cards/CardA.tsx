// Glass Tilt Card

import React, { type MouseEventHandler } from "react"
import { motion, useMotionValue, useTransform, type MotionStyle } from "motion/react"

export interface CardAProps {
    img?: string
    alt?: string
    text?: string
    color: "light" | "dark"
    variant: "A1" | "A2" | "A3" | "A4"
}

const cardVariant = {
    A1: 'linear-gradient(45deg, rgba(158, 158, 158, 0.3), rgba(222, 222, 222, 0.4), rgba(255, 255, 255, 0.5), rgba(222, 222, 222, 0.4), rgba(158, 158, 158, 0.3)',
    A2: 'linear-gradient(45deg, rgba(44, 21, 77, 0.3), rgba(104, 59, 168, 0.4), rgba(130, 92, 184, 0.5), rgba(104, 59, 168, 0.4), rgba(44, 21, 77, 0.3)',
    A3: 'linear-gradient(45deg, rgba(5, 77, 71, 0.35), rgba(116, 173, 169, 0.4), rgba(199, 237, 234, 0.5), rgba(116, 173, 169, 0.4), rgba(5, 77, 71, 0.35)',
    A4: 'linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(33, 33, 33, 0.4), rgba(77, 77, 77, 0.5), rgba(33, 33, 33, 0.4), rgba(0, 0, 0, 0.3)',
}

const outerDiv: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    perspective: '1000px',
}

const blurDiv: React.CSSProperties = {
    width: '100%', 
    height: '100%', 
    padding: '0', 
    margin: '0', 
    background: 'transparent', 
    backdropFilter: 'blur(50px)',
    WebkitBackdropFilter: 'blur(50px)',
}

const Card: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    margin: '0 auto',
    width: '100%',
    minHeight: '400px',
    maxWidth: '500px',
    aspectRatio: '2/3',
    padding: '1.5rem',
    border: 'none',
    borderRadius: '1rem',
    boxShadow: 'inset 0 0 3px rgba(255, 255, 255, 0.5)',
    backdropFilter: 'saturation(180%)',
    overflow: 'hidden',
    transition: 'transform 0.5s ease',
    transformStyle: 'preserve-3d',
}

const imgStyles: React.CSSProperties = {
    position: 'relative',
    width: '80%',
    height: '60%',
    margin: '2rem',
    objectFit: 'cover',
    borderRadius: '1rem',
    boxShadow: '4px 4px 10px 6px rgba(0, 0, 0, 0.6)',
    transform: 'perspective(300px) translateZ(50px)',
    transformStyle: 'preserve-3d',
}

const textStyles: React.CSSProperties = {
    transform: 'perspective(100px) translateZ(10px)',
    transformStyle: 'preserve-3d',
    fontFamily: 'inherit',
    fontSize: 'clamp(1rem, 2vw, 2rem)',
    textAlign: 'left',
    textShadow: '3px 2px 1px rgba(0, 0, 0, 0.4)',
    padding: '1rem',
    margin: 'auto',
    color: 'rgb(215, 215, 215)',
}

const getCardStyle = (
    colorVariant: string, 
    isHovered: boolean, 
    rotateX: any, 
    rotateY: any
): MotionStyle => ({
    ...Card,
    background: colorVariant,
    rotateX: isHovered ? rotateX : 0,
    rotateY: isHovered ? rotateY : 0,
})

export const CardA = ({ img, alt, text, variant }: CardAProps) => {
    const colorVariant = cardVariant[variant]
    const [isHovered, setIsHovered] = React.useState(false)

    const rotationValue = 30
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [-rotationValue, rotationValue])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-rotationValue, rotationValue])

    const handleMouseMove: MouseEventHandler = (e) => {
        if (!isHovered) return

        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) /rect.height - 0.5

        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <div
            id="card-a"
            style={outerDiv}
        >
            <div style={blurDiv}> 
                <motion.div
                    id={variant}
                    style={getCardStyle(colorVariant, isHovered, rotateX, rotateY)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave} 
                >
                    <img 
                        src={img} 
                        alt={alt}
                        style={imgStyles}
                    />
                    <span style={textStyles}>{text}</span>
                </motion.div>
            </div>
        </div>
    )
}