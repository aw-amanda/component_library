import { useEffect, useRef } from "react"
import Forest from "./forest.jpg"

interface FlashlightProps {
    imgSrc: string
}

export const FlashlightData:FlashlightProps[] = [
    {
        imgSrc: Forest
    }
]

export const FlashlightAnimation = ({ imgSrc = Forest }: FlashlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        containerRef.current.style.setProperty("--flashlightX", x + "px")
        containerRef.current.style.setProperty("--flashlightY", y + "px")
      }
    }

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        cursor: "none",
        margin: 0,
        overflow: "hidden",
        ["--flashlightX" as any]: "50%",
        ["--flashlightY" as any]: "50%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle 20vmax at var(--flashlightX, 50%) var(--flashlightY, 50%), rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.95) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </div>
  )
}
    