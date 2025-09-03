import { useEffect, useRef, useState } from "react"

export interface WaveTextProps {
    text: string
    variant: "A1" | "A2" | "A3" | "A4"
}

export const WaveText = ({ text, variant }: WaveTextProps) => {
    const [letters, setLetters] = useState<string[]>([])
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setLetters(text.split(''))
    }, [text])

    const textVariant = {
        A1: "rgb(215, 252, 248)",
        A2: "rgb(221, 207, 252)",
        A3: "rgb(255, 255, 255)",
        A4: "rgb(255, 82, 82)",
    }

    const textShadowVariant = {
        A1: "2px 6px 0 rgb(196, 255, 249), 4px 12px 0 rgb(81, 245, 228), 6px 18px 0 rgb(20, 181, 164), 8px 24px 0 rgb(0, 92, 82)",
        A2: "2px 6px 0 rgb(194, 166, 255), 4px 12px 0 rgb(168, 129, 252), 6px 18px 0 rgb(139, 86, 252), 8px 24px 0 rgb(64, 29, 138)",
        A3: "2px 6px 0 rgb(235, 235, 235), 4px 12px 0 rgb(171, 171, 171), 6px 18px 0 rgb(107, 107, 107), 8px 24px 0 rgb(46, 46, 46)",
        A4: "2px 6px 0 rgb(255, 207, 105), 4px 12px 0 rgb(129, 252, 139), 6px 18px 0 rgb(61, 197, 255), 8px 24px 0 rgb(182, 129, 252)",
    }

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: '2rem',
        backgroundColor: 'rgb(0, 0, 0)',
    }

    const textStyles: React.CSSProperties = {
        fontSize: 'clamp(1rem, 2rem, 3rem)',
        fontFamily: 'inherit',
        padding: '0.5rem',
        margin: 0,
        color: textVariant[variant],
        textShadow: textShadowVariant[variant],
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }

    const letterStyles: React.CSSProperties = {
        display: 'inline-block',
        opacity: 0,
        transform: 'translateY(-60%)',
        animation: 'wave 1.5s ease-in-out infinite',
    }

    useEffect(() => {
        const styleElement = document.createElement('style')
        styleElement.textContent = `
            @keyframes wave {
                0%, 100% {
                    transform: translateY(-60%) rotate(0deg);
                    opacity: 0;
                }
                50% {
                    transform: translateY(0%) rotate(${variant === 'A1' ? '5deg' : variant === 'A2' ? '-5deg' : variant === 'A3' ? '3deg' : '-3deg'});
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styleElement);

        return () => {
            document.head.removeChild(styleElement);
        };
    }, [variant])

    return (
    <div id="wave-text" ref={containerRef} style={containerStyle}>
      <h1 style={textStyles}>
        {letters.map((letter, index) => (
          <span
            key={index}
            style={{
              ...letterStyles,
              animationDelay: `${index * 0.05}s`,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>
    </div>
  )
}