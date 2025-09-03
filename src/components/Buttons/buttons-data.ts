import { ButtonA, type ButtonAProps } from "./ButtonA"
import { ButtonB, type ButtonBProps } from "./ButtonB"
import { ButtonC, type ButtonCProps } from "./ButtonC"
import { ButtonD, type ButtonDProps } from "./ButtonD"

type ButtonComponentProps = ButtonAProps | ButtonBProps | ButtonCProps | ButtonDProps

interface ButtonsDataProps {
    title: string
    component: React.ComponentType<any>
    componentProps: ButtonComponentProps
}

export const ButtonsData:ButtonsDataProps[] = [
    
// Button A
    {
        title: "Glow Button A1",
        component: ButtonA, 
        componentProps: {
            buttonText: "Button A1", 
            buttonVariant: "A1", 
            buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonA.tsx",
        },
    },
    {
        title: "Glow Button A2",
        component: ButtonA,
        componentProps: {
        buttonText: "Button A2",
        buttonVariant: "A2",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonA.tsx",
        },
    },
    {
        title: "Glow Button A3",
        component: ButtonA,
        componentProps: {
        buttonText: "Button A3",
        buttonVariant: "A3",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonA.tsx",
        },
    },
    {
        title: "Glow Button A4",
        component: ButtonA,
        componentProps: {
        buttonText: "Button A4",
        buttonVariant: "A4",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonA.tsx",
        },
    },
    {
        title: "Glow Button A5",
        component: ButtonA,
        componentProps: {
        buttonText: "Button A5",
        buttonVariant: "A5",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonA.tsx",
        },
    },
    {
        title: "Glow Button A6",
        component: ButtonA,
        componentProps: {
        buttonText: "Button A6",
        buttonVariant: "A6",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonA.tsx",
        },
    },
    {
        title: "Glow Button A7",
        component: ButtonA,
        componentProps: {
        buttonText: "Button A7",
        buttonVariant: "A7",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonA.tsx",
        },
    },
    {
        title: "Glow Button A8",
        component: ButtonA,
        componentProps: {
        buttonText: "Button A8",
        buttonVariant: "A8",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonA.tsx",
        },
    },
    {
        title: "Glow Button A9",
        component: ButtonA,
        componentProps: {
        buttonText: "Button A9",
        buttonVariant: "A9",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonA.tsx",
        },
    },
    {
        title: "Glow Button A10",
        component: ButtonA,
        componentProps: {
        buttonText: "Button A10",
        buttonVariant: "A10",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonA.tsx",
        },
    },

//Button B
    {
        title: "Gradient Wave Button B1",
        component: ButtonB,
        componentProps: {
        buttonText: "Button B1",
        buttonVariant: "B1",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonB.tsx",
        },
    },
    {
        title: "Gradient Wave Button B2",
        component: ButtonB,
        componentProps: {
        buttonText: "Button B2",
        buttonVariant: "B2",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonB.tsx",
        },
    },
    {
        title: "Gradient Wave Button B3",
        component: ButtonB,
        componentProps: {
        buttonText: "Button B3",
        buttonVariant: "B3",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonB.tsx",
        },
    },
    {
        title: "Gradient Wave Button B4",
        component: ButtonB,
        componentProps: {
        buttonText: "Button B4",
        buttonVariant: "B4",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonB.tsx",
        },
    },
    {
        title: "Gradient Wave Button B5",
        component: ButtonB,
        componentProps: {
        buttonText: "Button B5",
        buttonVariant: "B5",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonB.tsx",
        },
    },
    {
        title: "Gradient Wave Button B6",
        component: ButtonB,
        componentProps: {
        buttonText: "Button B6",
        buttonVariant: "B6",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonB.tsx",
        },
    },
    {
        title: "Gradient Wave Button B7",
        component: ButtonB,
        componentProps: {
        buttonText: "Button B7",
        buttonVariant: "B7",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonB.tsx",
        },
    },
    {
        title: "Gradient Wave Button B8",
        component: ButtonB,
        componentProps: {
        buttonText: "Button B8",
        buttonVariant: "B8",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonB.tsx",
        },
    },
    {
        title: "Gradient Wave Button B9",
        component: ButtonB,
        componentProps: {
        buttonText: "Button B9",
        buttonVariant: "B9",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonB.tsx",
        },
    },
    {
        title: "Gradient Wave Button B10",
        component: ButtonB,
        componentProps: {
        buttonText: "Button B10",
        buttonVariant: "B10",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonB.tsx",
        },
    },

// Button C
    {
        title: "Glass Button C1",
        component: ButtonC,
        componentProps: {
        buttonText: "Button C1",
        buttonVariant: "C1",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonC.tsx",
        },
    },
    {
        title: "Glass Button C2",
        component: ButtonC,
        componentProps: {
        buttonText: "Button C2",
        buttonVariant: "C2",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonC.tsx",
        },
    },
    {
        title: "Glass Button C3",
        component: ButtonC,
        componentProps: {
        buttonText: "Button C3",
        buttonVariant: "C3",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonC.tsx",
        },
    },
    {
        title: "Glass Button C4",
        component: ButtonC,
        componentProps: {
        buttonText: "Button C4",
        buttonVariant: "C4",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonC.tsx",
        },
    },
    {
        title: "Glass Button C5",
        component: ButtonC,
        componentProps: {
        buttonText: "Button C5",
        buttonVariant: "C5",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonC.tsx",
        },
    },

    // Button D
    {
        title: "Flip Button D1",
        component: ButtonD,
        componentProps: {
        buttonText: "Button D1",
        buttonVariant: "D1",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonD.tsx",
        },
    },
    {
        title: "Flip Button D2",
        component: ButtonD,
        componentProps: {
        buttonText: "Button D2",
        buttonVariant: "D2",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonD.tsx",
        },
    },
    {
        title: "Flip Button D3",
        component: ButtonD,
        componentProps: {
        buttonText: "Button D3",
        buttonVariant: "D3",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonD.tsx",
        },
    },
    {
        title: "Flip Button D4",
        component: ButtonD,
        componentProps: {
        buttonText: "Button D4",
        buttonVariant: "D4",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonD.tsx",
        },
    },
    {
        title: "Flip Button D5",
        component: ButtonD,
        componentProps: {
        buttonText: "Button D5",
        buttonVariant: "D5",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonD.tsx",
        },
    },
    {
        title: "Flip Button D6",
        component: ButtonD,
        componentProps: {
        buttonText: "Button D6",
        buttonVariant: "D6",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonD.tsx",
        },
    },
    {
        title: "Flip Button D7",
        component: ButtonD,
        componentProps: {
        buttonText: "Button D7",
        buttonVariant: "D7",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonD.tsx",
        },
    },
    {
        title: "Flip Button D8",
        component: ButtonD,
        componentProps: {
        buttonText: "Button D8",
        buttonVariant: "D8",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonD.tsx",
        },
    },
    {
        title: "Flip Button D9",
        component: ButtonD,
        componentProps: {
        buttonText: "Button D9",
        buttonVariant: "D9",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonD.tsx",
        },
    },
    {
        title: "Flip Button D10",
        component: ButtonD,
        componentProps: {
        buttonText: "Button D10",
        buttonVariant: "D10",
        buttonLinkUrl: "https://github.com/aw-amanda/button_components/blob/main/ButtonD.tsx",
        },
    },
]