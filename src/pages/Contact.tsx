import { FadeInSection, MoveDownSection } from "../components/Animations"
import { ContactData } from "../constants/ContactData"

export const Contact = () => {
    return (
        <div className="h-screen flex flex-col items-center">
            <div className="flex flex-col items-center">
                <MoveDownSection>
                    <div className="text-9xl max-lg:text-7xl !text-end max-sm:!text-center font-bold
                    hover:brightness-105 flex flex-col h-full
                    bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent items-center">
                        <span>Let’s Create</span>
                        <span>Impact</span>
                    </div>
                </MoveDownSection>

                <div className="flex flex-col items-center justify-center w-4/5 bg-white rounded-xl mt-20 p-3">
                    <h1 className="text-5xl">Email</h1>
                    <a rel="noreferrer" target="_blank" className="group m-5"
                        key={ContactData[0].title}
                        href={ContactData[0].url}
                    >
                        <FadeInSection>
                            <div className="flex flex-col rounded-xl p-2 max-lg:p-3 max-md:p-2 max-sm:p-1 hover:text-white text-neutral-600 bg-slate-50 border-2
                            hover:shadow-lg w-64 max-lg:w-48 text-center justify-center active:scale-[0.95] hover:bg-gradient-to-br hover:from-orange-500 hover:via-pink-600 hover:to-purple-700 hover:bg-[length:150%_150%] hover:animate-gradient">
                                <div className="text-3xl max-lg:text-xl font-bold">
                                    {ContactData[0].icon}
                                    {ContactData[0].title}
                                    {/* outlook logo */}
                                    <i className="fas fa-external-link-alt ml-2 opacity-0 group-hover:opacity-100 z-20"></i>
                                </div>
                            </div>
                        </FadeInSection>
                    </a>
                </div>



                <div className="flex flex-row flex-wrap justify-center w-4/5 bg-white rounded-xl mt-5">
                    {
                        ContactData.slice(1, 3).map((data) => {
                            return (
                                <a rel="noreferrer" target="_blank" className="group m-5 active:scale-[0.95]"
                                    key={data.title}
                                    href={data.url}
                                >
                                    <FadeInSection>
                                        <div className="text-3xl rounded-full">
                                            {data.icon}
                                        </div>
                                    </FadeInSection>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}