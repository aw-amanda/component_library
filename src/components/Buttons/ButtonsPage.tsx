import { ButtonsData } from "./buttons-data"

export const ButtonsPage = () => {
    return (
        <div 
            id="buttons-page"
            className="w-full pt-40 bg-black flex flex-col items-center justify-center">
            <div>
                <h1 className="text-3xl md:text-5xl text-white m-2">Button Components</h1>
            </div>
            <div className="flex flex-col items-center justify-center py-5">
                <div className="w-full h-fit py-2">
                    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                        {ButtonsData.map((button, index) => {
                            const ButtonComponent = button.component
                            
                            return (
                                <li 
                                    key={index}
                                    title={button.title}
                                    aria-label={button.title}
                                    className="border-1 border-white rounded-xl p-4 text-center"
                                >
                                    <ButtonComponent {...button.componentProps} />
                                </li>  
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}