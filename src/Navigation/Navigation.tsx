import { NavItems } from "./nav-items"

export const Navigation: React.FC = () => {
    return (
        <div className="sticky top-0 w-full z-999 p-2 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md">
            <h1 className="text-4xl md:text-5xl text-white tracking-wider py-2 mb-2">Component Library</h1>
            <div className="w-fit max-w-[75vw] px-4 m-auto">
                <ul className="flex flex-row gap-4 p-2 justify-evenly">
                    {NavItems.map((item, index) => (
                        <li 
                            key={index}
                            className="text-center justify-center py-4 px-6 rounded-2xl inset-shadow-sm inset-shadow-gray-50
                                        hover:shadow-gray-400 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                        >
                            <a 
                                href={item.id}
                                className="text-xl md:text-2xl text-white cursor-pointer"
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}