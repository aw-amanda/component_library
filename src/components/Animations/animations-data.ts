import type React from "react"
import { SpiderCrawlerCanvas } from "./SpiderCrawler/SpiderCrawler"
import { FallingStars } from "./FallingStars/FallingStars"
import { FlashlightAnimation } from "./Flashlight/Flashlight"
import { FlashlightData } from "./Flashlight/Flashlight"

interface AnimationsDataProps {
    title: string
    url: string
    id: string
    component: React.ComponentType<any>
    componentProps?: React.ComponentProps<any>
}

export const AnimationsData:AnimationsDataProps[] = [
    {
        title: "Spider Crawler Canvas Animation",
        url: "https://github.com/aw-amanda/animation_components/blob/main/SpiderCrawler.tsx",
        id: "#spider-crawler-canvas",
        component: SpiderCrawlerCanvas,
    },
    {
        title: "Falling Stars Animation",
        url: "https://github.com/aw-amanda/animation_components/blob/main/FallingStars.tsx",
        id: "#falling-stars-canvas",
        component: FallingStars,
    },
    {
        title: "Flashlight Animation",
        url: "https://github.com/aw-amanda/animation_components/blob/main/Flashlight.tsx",
        id: "#flashlight-animation",
        component: FlashlightAnimation,
        componentProps: FlashlightData,
    },
]