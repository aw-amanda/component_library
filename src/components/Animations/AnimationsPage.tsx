import { AnimationsData } from "./animations-data"

export const AnimationsPage = () => {
    return (
        <div 
            id="animations-page"
            className="w-full pt-50 px-2 bg-black flex flex-col items-center justify-center"
        >
            <div>
                <h1 className="text-3xl md:text-5xl text-white m-2">Animation Components</h1>
            </div>
            <div className="max-w-[100vw] h-full py-2">
                <ul className="flex flex-col items-center justify-center">
                    {AnimationsData.map((item, index) => {
                        const AnimationComponent = item.component
                        return (
                            <li key={index} className="w-full">
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <h2 className="text-white mb-1 p-2 text-center text-xl md:text-2xl">
                                        {item.title}
                                    </h2>
                                    <AnimationComponent />
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}