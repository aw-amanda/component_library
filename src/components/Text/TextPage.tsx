import { TextData } from "./text-data"

export const TextPage = () => {
    return (
        <div 
            id="text-page"
            className="w-full pt-50 px-2 bg-black flex flex-col items-center justify-center"
        >
            <div>
                <h1 className="text-3xl md:text-5xl text-white m-2">Text Components</h1>
            </div>
            <div className="max-w-[100vw] h-full py-2">
                <ul className="flex flex-col items-center justify-center">
                    {TextData.map((item, index) => {
                        const TextComponent = item.component
                        return (
                            <li key={index} className="w-full">
                                <a href={item.url} target="_blank" rel="noopener noreferrer" title={item.title}>
                                    <TextComponent {...item.props} />
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}