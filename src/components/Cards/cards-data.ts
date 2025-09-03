import { CardA, type CardAProps } from "./CardA"
import { CardB, type CardBProps } from "./CardB"
import { CardC, type CardCProps } from "./CardC"

type CardComponentProps = CardAProps | CardBProps | CardCProps

interface CardsDataProps {
    title: string
    src: string
    url: string
    component: React.ComponentType<any>
    componentProps: CardComponentProps
}

export const CardsData:CardsDataProps[] = [
    
// Card A
    {
        title: "Tilt Card A1",
        src: "./Cards/CardA",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardA.tsx",
        component: CardA, 
        componentProps: {
            img: "https://cdn.pixabay.com/photo/2022/09/14/18/32/relaxing-space-7454948_960_720.jpg",
            alt: "glass tilt card image",
            text: "Tilt Card A1", 
            variant: "A1",
            color: "dark",
        },
    },
    {
        title: "Tilt Card A2",
        src: "./Cards/CardA",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardA.tsx",
        component: CardA, 
        componentProps: {
            img: "https://cdn.pixabay.com/photo/2020/04/10/20/06/photoshop-5027674_960_720.jpg",
            alt: "glass tilt card image",
            text: "Tilt Card A2", 
            variant: "A2", 
            color: "light",
        },
    },
    {
        title: "Tilt Card A3",
        src: "./Cards/CardA",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardA.tsx",
        component: CardA, 
        componentProps: {
            img: "https://cdn.pixabay.com/photo/2019/09/09/19/32/villa-4464471_960_720.jpg",
            alt: "glass tilt card image",
            text: "Tilt Card A3", 
            variant: "A3", 
            color: "dark",
        },
    },
    {
        title: "Tilt Card A4",
        src: "./Cards/CardA",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardA.tsx",
        component: CardA, 
        componentProps: {
            img: "https://cdn.pixabay.com/photo/2025/03/31/21/30/italy-9505450_960_720.jpg",
            alt: "glass tilt card image",
            text: "Tilt Card A4", 
            variant: "A4", 
            color: "light",
        },
    },

// Card B
    {
        title: "Gradient Wave Card B1",
        src: "./Cards/CardB",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardB.tsx",
        component: CardB, 
        componentProps: {
            img: "https://cdn.pixabay.com/photo/2015/08/28/01/49/colour-pencils-911358_960_720.jpg",
            alt: "gradient wave card image",
            text: "Gradient Wave Card B1", 
            variant: "B1",
            color: "dark",
        },
    },
    {
        title: "Gradient Wave Card B2",
        src: "./Cards/CardB",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardB.tsx",
        component: CardB, 
        componentProps: {
            img: "https://cdn.pixabay.com/photo/2020/12/15/01/43/street-5832394_960_720.jpg",
            alt: "gradient wave card image",
            text: "Gradient Wave Card B2", 
            variant: "B2",
            color: "light",
        },
    },
    {
        title: "Gradient Wave Card B3",
        src: "./Cards/CardB",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardB.tsx",
        component: CardB, 
        componentProps: {
            img: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg",
            alt: "gradient wave card image",
            text: "Gradient Wave Card B3", 
            variant: "B3",
            color: "light",
        },
    },
    {
        title: "Gradient Wave Card B4",
        src: "./Cards/CardB",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardB.tsx",
        component: CardB, 
        componentProps: {
            img: "https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489_960_720.jpg",
            alt: "gradient wave card image",
            text: "Gradient Wave Card B4", 
            variant: "B4",
            color: "dark",
        },
    },

// Card C
    {
        title: "Zoom Card C1",
        src: "./Cards/CardC",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardC.tsx",
        component: CardC, 
        componentProps: {
            title: 'Card C1',
            img: "https://cdn.pixabay.com/photo/2019/01/23/14/06/black-3950334_960_720.jpg",
            alt: "zoom card image",
            text: "Zoom Card C1", 
            variant: "C1",
            color: "light",
        },
    },
    {
        title: "Zoom Card C2",
        src: "./Cards/CardC",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardC.tsx",
        component: CardC, 
        componentProps: {
            title: 'Card C2',
            img: "https://cdn.pixabay.com/photo/2016/01/11/15/18/toy-1133756_960_720.jpg",
            alt: "zoom card image",
            text: "Zoom Card C2", 
            variant: "C2",
            color: "dark",
        },
    },
    {
        title: "Zoom Card C3",
        src: "./Cards/CardC",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardC.tsx",
        component: CardC, 
        componentProps: {
            title: 'Card C3',
            img: "https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_960_720.jpg",
            alt: "zoom card image",
            text: "Zoom Card C3", 
            variant: "C3",
            color: "light",
        },
    },
    {
        title: "Zoom Card C4",
        src: "./Cards/CardC",
        url: "https://github.com/aw-amanda/card_components/blob/main/CardC.tsx",
        component: CardC, 
        componentProps: {
            title: 'Card C4',
            img: "https://cdn.pixabay.com/photo/2024/08/24/14/42/elephant-8994442_960_720.jpg",
            alt: "zoom card image",
            text: "Zoom Card C4", 
            variant: "C4",
            color: "dark",
        },
    },
]