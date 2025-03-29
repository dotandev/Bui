import {useNavigate, useParams, useSearchParams} from "react-router-dom"
import Nav from "../names/nav";
import {Card, Text} from "@radix-ui/themes";
import { ChevronDownIcon, ChevronUpIcon} from '@radix-ui/react-icons'
import {useEffect, useState} from 'react'
import { FaArrowRight} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaXTwitter, FaDiscord, FaTelegram } from "react-icons/fa6";
import {UserData} from "../../types";
import ScoreModal from "./scoreModal.tsx";
import { usageSummary, cards } from "../../utils/index.ts";
import HeatMap from './HeatMap'
import Footer from "../footer.tsx";
export default function Explorer() {
    const [queryParams] = useSearchParams();
    const { username: paramUsername } = useParams();
    const navigate = useNavigate()
    const [isUp, setUp] = useState<boolean>(false);
    const [isDroppingDown, setDroppingDown] = useState<boolean>(false);
    const [isOpeningModal, setModalOpening] = useState<boolean>(false)
    const [userData, setUserData] = useState<UserData>({
        username: 'biokes',
        basename: `${queryParams || 'username'}.base.bui`,
        walletAddress: '0x23s2367jhsd90hwx23ejiou9ji32jn9u22u109u0u0n9s2e',
        discord:'bui_for_discord',
        twitter:'bui_for_twitter',
        telegram:'bui_for_telegram',

    })
    useEffect(() => {
        const username = paramUsername || queryParams.get("username") || "username";
        setUserData((prevState) => ({
            ...prevState,
            basename: `${username}.base.bui`,
        }));
    }, [queryParams]);
    const values = [
        {date: "2024-01-01", count: 1},
        {date: "2024-01-02", count: 3},
        {date: "2024-01-05", count: 5},
        {date: "2024-01-10", count: 2},
    ];
    const totalCount = values.reduce((sum, data) => sum + data.count, 0);


    return (
        <div className={'bg-cover bg-contain bg-center text-gray-900'} style={{
                 backdropFilter:'blur(10px)',
            backgroundImage: `url('/bui.png')`,
        }}>
            <Nav color={'white'} background="black" />
            <div className={'flex flex-col lg:flex-row gap-[10px] justify-center px-[10px] py-[30px] md:py-[30px] '}>
                <div className={'w-full lg:w-[700px] shadow-lg hover:scale-101  transform duration-100 transition'}>
                    <div className='relative border-[1px] border-[#07151C] shadow gap-[10px] rounded-[10px] p-[10px] flex justify-between flex-col  focus-within:block shadow-white'>
                        <div className={'relative flex gap-[10px] backdrop-blur-[20px] justify-between items-center'}>
                            <div className={'flex gap-[15px] items-center text-[1.8rem] capitalize font-bold'} onClick={()=>{setDroppingDown(!isDroppingDown)}}>
                                <CgProfile size={35}/>
                                <Text>{userData.username}</Text>
                            </div>
                            {isDroppingDown && (
                                <div
                                    className="absolute p-[10px] bg-white w-[80%] rounded shadow-md text-gray-900 flex flex-col focus-within:block">
                                    <div className={'flex w-full justify-between items-center  focus-within:block'}>
                                        <Text
                                            className="hover:bg-gray-200 cursor-pointer text-white">{userData.basename}.base.bui</Text>
                                    </div>
                                    <div className={'flex w-full justify-between items-center'}>
                                        <Text className="hover:bg-gray-200 cursor-pointer line-clamp-1 w-[80%] text-white">{userData.walletAddress}</Text>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Card className={'bg-[#07151C] text-white'}>
                            <Text>Connect </Text>
                            <div className={'flex gap-[10px] p-[10px]'}>
                                <FaXTwitter size={20}/>
                                <Text>{userData.twitter}</Text>
                            </div>
                            <div className={'flex gap-[10px] p-[5px]'}>
                                <FaDiscord size={20}/>
                                <Text>{userData.discord}</Text>
                            </div>
                            <div className={'flex gap-[10px] p-[5px]'}>
                                <FaTelegram  size={20}/>
                                <Text>{userData.telegram}</Text>
                            </div>
                        </Card>
                    </div>
                </div>
                <Card className={
                  'shadow-xl border-[#07151C] border-[1px] backdrop-blur-sm group hover:backdrop-blur-3xl'
                  }>
                    <div
                        className='rounded-[10px] border-[1px] border-grey-500 bg-grey-700 flex gap-[10px] justify-start p-[10px_20px]'>
                        <input type="radio" checked />
                        <Text>Activity</Text>
                    </div>
                    <div className={'py-[10px]'}>
                        <header>
                            <Text>onChain score</Text>
                            <Text>{totalCount}/1000</Text>
                            <HeatMap />
                        </header>
                        <div className={'py-[10px] w-full md:px-0 gap-[10px] flex flex-col '}>
                            <header className={"flex gap-[10px] items-center cursor"}>
                                {
                                    isUp
                                        ?
                                        <ChevronUpIcon fontSize={20} onClick={function () {
                                            setUp(!isUp)
                                        }}/> :
                                        <ChevronDownIcon fontSize={20} onClick={function () {
                                            setUp(isUp)
                                        }}/>
                                }
                                <h4>View Details</h4>
                            </header>
                            <div className={`${isUp ? 'hidden' :
                                'flex flex-wrap gap-[15px] w-full border-[1px] bg-[#07151C] border-gray-500 rounded-[10px] justify-around px-[30px] py-[10px]'}`
                            }>
                                {
                                    usageSummary.map((data) => (
                                        <section key={data.text} className={'flex flex-col  w-[120px] sm:w-[150px] '}>
                                            <h5 className={'text-blue-400 text-[1.1rem]'}>{data.usage}</h5>
                                            <p className={'text-[0.8rem] text-white'}>{data.text}</p>
                                        </section>))
                                }
                            </div>
                        </div>
                    </div>
                    <h5 className={'py-[10px] text-[1rem] underline w-full text-center hover:scale-105 transition transform duration-200'}
                        onClick={() => { setModalOpening(true) }}>Tab to view Profile rating score</h5>
                    <div className={'flex flex-wrap justify-start items-start gap-[20px] md:gap-y-[40px] py-[15px]'}>
                        {cards.map((data) => (
                            <Card className={'w-[min(300px,100%)] sm:w-[300px ] md:w-[45%] bg-[#07151C] hover:scale-105 text-white transition transform duration-200'}>
                                <div
                                    className={'w-full h-[200px] rounded-[10px] border-[1px] border-gray-900 overflow-hidden'}>
                                    <img
                                        className={'object-cover object-center hover:scale-105 duration-300 transform w-full h-full'}
                                        src={data.imageURL} alt="registry"/>
                                </div>
                                <h4 className={'hover:text-blue-400 font-[0.85rem] py-[10px] flex text-center items-center cursor-pointer gap-[10px]'}
                                    onClick={function () {
                                        navigate(data.link)
                                    }}>{data.text}<FaArrowRight/>
                                </h4>
                            </Card>
                        ))
                        }
                    </div>
                </Card>
                <ScoreModal score={'7'} isOpen={isOpeningModal} onClose={()=>{setModalOpening(false)}}/>
            </div>
            <Footer color='white' background="black" />
        </div>
    )
}