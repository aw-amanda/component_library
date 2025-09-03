
export interface GradientTextProps {
    text: string
    variant: "A1" | "A2" | "A3" | "A4"
}

export const GradientText = ({ text, variant }: GradientTextProps) => {

    const textVariant = {
        A1: "rgb(64, 194, 255), rgb(0, 132, 194), rgb(0, 88, 130)",
        A2: "rgb(56, 26, 163), rgb(90, 26, 163), rgb(122, 26, 163), rgb(163, 26, 163)",
        A3: "rgb(4, 199, 186), rgb(4, 199, 147), rgb(4, 199, 118), rgb(4, 199, 76), rgb(22, 120, 58)",
        A4: "rgb(247, 232, 129), rgb(242, 222, 82), rgb(242, 189, 82), rgb(201, 130, 22), rgb(201, 91, 22), rgb(186, 7, 49), rgb(125, 23, 153), rgb(90, 33, 143)",
    }

    const textStyles: React.CSSProperties = {
        display: 'inline-block',
        fontSize: 'clamp(1rem, 2rem, 3rem)',
        fontFamily: 'inherit',
        fontWeight: 'bold',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundImage: `linear-gradient(45deg, ${textVariant[variant]})`,
        padding: '0.5rem',
        margin: 0,
    }

    return (
        <div id="gradient-text"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                margin: 0,
                padding: '2rem',
                backgroundColor: 'rgb(0, 0, 0)',
            }}
        >
        <p id={variant} style={textStyles}>
            {text}
        </p>
        </div>
    )

}