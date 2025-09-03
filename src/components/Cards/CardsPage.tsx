import { CardsData } from "./cards-data"

export const CardsPage = () => {
    return (
        <div 
            id="cards-page"
            className="w-full pt-50 px-2 bg-black flex flex-col items-center justify-center">
            <div>
                <h1 className="text-3xl md:text-5xl text-white m-2">Card Components</h1>
            </div>
            <div className="flex flex-col items-center justify-center py-5">
                <div className="w-full h-fit py-2">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[95vw]">
                        {CardsData.map((card, index) => {
                            const CardComponent = card.component
                            
                            return (
                                <li 
                                    key={index}
                                    className="w-full border-1 border-white rounded-xl p-8 text-center"
                                >
                                    <a href={card.url} target="_blank" rel="noopener noreferrer">
                                       <CardComponent {...card.componentProps} /> 
                                    </a>
                                    
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}