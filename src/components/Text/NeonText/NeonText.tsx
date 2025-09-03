
export interface NeonTextProps {
    text: string
    variant: "A1" | "A2" | "A3" | "A4"
}

export const NeonText = ({ text, variant }: NeonTextProps) => {

    const textVariant = {
        A1: "rgb(255, 0, 238)",
        A2: "rgb(255, 255, 0)",
        A3: "rgb(0, 255, 238)",
        A4: "rgb(166, 0, 255)",
    }

    const textShadowVariant = {
        A1: "0 0 3px rgb(255, 38, 241), 0 0 5px rgb(255, 168, 249), 0 0 7px rgb(255, 36, 240)",
        A2: "0 0 3px rgb(255, 255, 168), 0 0 5px rgb(255, 255, 97), 0 0 7px rgb(255, 255, 194)",
        A3: "0 0 3px rgb(153, 255, 248), 0 0 5px rgb(94, 255, 244), 0 0 7px rgb(189, 255, 250)",
        A4: "0 0 3px rgb(176, 25, 255), 0 0 5px rgb(187, 56, 255), 0 0 7px rgb(204, 105, 255)",
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

    return (
    <div id="neon-text" style={containerStyle}>
      <p style={textStyles}>{text}</p>
    </div>
  )
}