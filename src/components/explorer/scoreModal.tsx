export default function ScoreModal({isOpen,score, onClose}:{isOpen:boolean, score:string,  onClose:()=>void}) {
    return (
        <div className={`${!isOpen?"hidden":"fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-50"}`}>
            <div className={"fixed inset-0 flex w-screen justify-center md:p-4 items-center  text-gray-900"}>
                <div>
                    <div className={`md:border-gray-40/20 flex h-screen max-h-[410px] rounded-[20px] overflow-y-scroll md:h-full w-full flex-col gap-4 md:rounded-3xl md:border
                     bg-white p-6 md:p-10 shadow-lg sm:h-auto  max-w-[350px]`}>
                        <div className={"flex justify-end"}>
                            <button type="button" className={"ml-auto text-xl text-[#0A0B0D]"} onClick={function (){onClose()}}>
                                <svg width="14" height="14" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          clip-rule="evenodd" d="M2.82845 0.272185L25.4559 22.8996L22.6274 25.728L2.28882e-05 3.10061L2.82845 0.272185Z"
                                          fill="currentColor">
                                    </path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M22.6274 0.272185L3.33786e-06 22.8996L2.82843 25.728L25.4558 3.10061L22.6274 0.272185Z"
                                          fill="currentColor">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className={"flex flex-1 flex-col place-content-center place-items-center gap-2"}>
                            <div className={"flex max-w-[380px] flex-col items-center"}>
                                <div className={"group relative flex items-center justify-center p-6"}>
                                    <figure className={"overflow-hidden rounded-full"}>
                                        <img alt="Builder Score" loading="lazy" width="120" height="120" decoding="async"
                                             className={" text-gray-900 transition-all duration-200 group-hover:rotate-[-1deg] group-hover:scale-105 opacity-100"}
                                             src={'/talentScore.jpeg'}
                                             style={{color: "transparent"}}/>
                                        </figure>
                                    <span className={"absolute font-sans text-3xl font-bold  text-gray-900"}>
                                            {score}
                                    </span>
                                    </div><span className={"mb-4 text-2xl font-medium  text-gray-900"}>Builder Score</span>
                                <p className={"mb-10 text-center text-gray-900"}>Builder Score is the sum of all credentials in your Talent Passport. You're legit!</p>
                                <span className={"text-l mb-8 font-bold uppercase  text-gray-900"}>status: claimed</span>
                                <a target="_blank" className={"w-full  text-gray-900"} href="https://passport.talentprotocol.com/">
                                    <button className={`font-display text-center flex gap-2 items-center whitespace-nowrap cursor-pointer text-white bg-button-black
                                    hover:bg-button-blackHover active:bg-button-blackActive text-sm md:text-lg px-10 py-3.5 rounded-full w-full justify-center`}>
                                        Increase your Builder Score</button>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}