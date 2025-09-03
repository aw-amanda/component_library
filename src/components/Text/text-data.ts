import { GradientText } from "./GradientText/GradientText"
import { WaveText } from "./WaveText/WaveText"
import { NeonText } from "./NeonText/NeonText"

interface TextDataProps {
    title: string
    url: string
    id: string
    component: React.ComponentType<any>
    props?: any
}

export const TextData:TextDataProps[] = [
    {
        title: "Gradient Text A1",
        url: "https://github.com/aw-amanda/text_components/blob/main/GradientText.tsx",
        id: "#gradient-text",
        component: GradientText,
        props: { text: "Gradient Text A1", variant: "A1" },
    },
    {
        title: "Gradient Text A2",
        url: "https://github.com/aw-amanda/text_components/blob/main/GradientText.tsx",
        id: "#gradient-text",
        component: GradientText,
        props: { text: "Gradient Text A2", variant: "A2" },
    },
    {
        title: "Gradient Text A3",
        url: "https://github.com/aw-amanda/text_components/blob/main/GradientText.tsx",
        id: "#gradient-text",
        component: GradientText,
        props: { text: "Gradient Text A3", variant: "A3" },
    },
    {
        title: "Gradient Text A4",
        url: "https://github.com/aw-amanda/text_components/blob/main/GradientText.tsx",
        id: "#gradient-text",
        component: GradientText,
        props: { text: "Gradient Text A4", variant: "A4" },
    },
    {
        title: "Wave Text A1",
        url: "https://github.com/aw-amanda/text_components/blob/main/WaveText.tsx",
        id: "#wave-text",
        component: WaveText,
        props: { text: "Wave Text A1", variant: "A1" },
    },
    {
        title: "Wave Text A2",
        url: "https://github.com/aw-amanda/text_components/blob/main/WaveText.tsx",
        id: "#wave-text",
        component: WaveText,
        props: { text: "Wave Text A2", variant: "A2" },
    },
    {
        title: "Wave Text A3",
        url: "https://github.com/aw-amanda/text_components/blob/main/WaveText.tsx",
        id: "#wave-text",
        component: WaveText,
        props: { text: "Wave Text A3", variant: "A3" },
    },
    {
        title: "Wave Text A4",
        url: "https://github.com/aw-amanda/text_components/blob/main/WaveText.tsx",
        id: "#wave-text",
        component: WaveText,
        props: { text: "Wave Text A4", variant: "A4" },
    },
    {
        title: "Neon Text A1",
        url: "https://github.com/aw-amanda/text_components/blob/main/NeonText.tsx",
        id: "#neon-text",
        component: NeonText,
        props: { text: "Neon Text A1", variant: "A1" },
    },
    {
        title: "Neon Text A2",
        url: "https://github.com/aw-amanda/text_components/blob/main/NeonText.tsx",
        id: "#neon-text",
        component: NeonText,
        props: { text: "Neon Text A2", variant: "A2" },
    },
    {
        title: "Neon Text A3",
        url: "https://github.com/aw-amanda/text_components/blob/main/NeonText.tsx",
        id: "#neon-text",
        component: NeonText,
        props: { text: "Neon Text A3", variant: "A3" },
    },
    {
        title: "Neon Text A4",
        url: "https://github.com/aw-amanda/text_components/blob/main/NeonText.tsx",
        id: "#neon-text",
        component: NeonText,
        props: { text: "Neon Text A4", variant: "A4" },
    },
]