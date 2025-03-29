import Nav from "../names/nav.tsx";
import { Card, Text } from "@radix-ui/themes";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AirdropEvent, HackEvent, RecentWinners } from "../../types";
import { hacksData, airdropEvents, recentWinners } from "../../utils/index.ts";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom'
import LiveFeedUpdate from './livefeeds.tsx'
export default function Competition() {
    const navigate = useNavigate()
    const ActiveHacks = ({ hacksData }: { hacksData: HackEvent[] }) => {
        return (
            <div className={'lg:w-[500px] p-[5px]'}>
                <p className={'text-[1rem] font-semibold w-full text-center'}>Upcoming Events</p>
                <Swiper spaceBetween={20} slidesPerView={1} navigation={true} pagination={{ clickable: true }} scrollbar={{ draggable: true }} loop={true}
                    modules={[Pagination, Navigation]} style={{
                        '--swiper-pagination-color': '#ffffff',
                        '--swiper-navigation-color': '#ffffff',
                    } as React.CSSProperties}>
                    {
                        hacksData.map((data, index) => (
                            <SwiperSlide key={index} className={'pb-[30px] lg:pb-[20px] px-[15px]'} style={{ backgroundColor: 'linear-gradrient(to right,#0E778F 20%, #B5F2FF 20%, #157C93 60%)' }}>
                                <Card className={'bg-[#0E778F] text-white'}>
                                    <div className={'w-[100%] h-[100px] border-[#0E778F] rounded-[12px] border-[1px] overflow-hidden'}>
                                        <img src={data.image}
                                            className={'object-cover object-contain w-full h-full hover:scale-105 transition-all transform duration-400'}
                                            alt="hack" />
                                    </div>
                                    <div className={'w-full gap-[10px] items-center flex flex-col pt-[10px]'}>
                                        <Card className={'flex flex-col gap-[5px] w-full'}>
                                            <h1 className={'text-[1rem] line-clamp-1'}>{data.eventName}</h1>
                                            <p className={'text-[0.7rem]'}>Organizers : {data.organizers}</p>
                                            <p className={'line-clamp-2 text-[0.6rem]'}>{data.desc}</p>
                                            <div className={'flex justify-between items-center py-[4px]'}>
                                                <Text size={"1"}>Prize pool : ${data.prize}</Text>
                                                <Text size={"1"}>Deadline : {data.deadline}</Text>
                                            </div>
                                        </Card>
                                        <button
                                            className={'text-[0.5rem] border-[1px] border-gray-800 w-[130px] h-[27px] cursor-pointer bg-[#0E778F] rounded-[10px] hover:bg-gray-500 transition transform duration-400'}>
                                            Join
                                        </button>
                                    </div>
                                </Card>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        )
    }
    const Bounties = ({ airdropEvents }: { airdropEvents: AirdropEvent[] }) => {
        return (
            <div className={'lg:w-[500px] p-[5px]'}>
                <p className={'text-[1rem] font-semibold w-full text-center'}>Simple Challenges & Airdrop Tasks</p>
                <Swiper spaceBetween={20} slidesPerView={1} navigation={true} pagination={{ clickable: true }} scrollbar={{ draggable: true }} loop={true}
                    modules={[Pagination, Navigation]}
                    style={{
                        '--swiper-pagination-color': '#ffffff',
                        '--swiper-navigation-color': '#ffffff',
                    } as React.CSSProperties}>
                    {
                        airdropEvents.map((data, index) => (
                            <SwiperSlide key={index} className={'pb-[30px] lg:pb-[20px] px-[15px]'}>
                                <Card className={'bg-[#0E778F] text-white'}>
                                    <div className={'w-[100%] h-[100px] border-[#0E778F] rounded-[12px] border-[1px] overflow-hidden'}>
                                        <img src={data.image}
                                            className={'object-cover object-contain w-full h-full hover:scale-105 transition-all transform duration-400'}
                                            alt="hack" />
                                    </div>
                                    <div className={'w-full gap-[10px] items-center flex flex-col pt-[10px]'}>
                                        <Card className={'flex flex-col gap-[5px] w-full'}>
                                            <h1 className={'text-[1rem] line-clamp-1'}>{data.eventName}</h1>
                                            <p className={'text-[0.7rem]'}>Organizers : {data.organizers}</p>
                                            <p className={'line-clamp-2 text-[0.6rem]'}>{data.desc}</p>
                                            <div className={'flex justify-between items-center py-[4px]'}>
                                                <Text size={"1"}>Prize pool : ${data.reward}</Text>
                                                <Text size={"1"}>Deadline : {data.deadline}</Text>
                                            </div>
                                        </Card>
                                        <button
                                            className={'text-[0.5rem] border-[1px] border-gray-800 w-[130px] h-[27px] cursor-pointer bg-[#0E778F] rounded-[10px] hover:bg-gray-500 transition transform duration-400'}>
                                            {data.CTA}
                                        </button>
                                    </div>
                                </Card>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        )
    }
    const RecentWinners = ({ winners }: { winners: RecentWinners[] }) => {
        return (
            <div className={'flex flex-col rounded-1  rounded-md p-1 shadow-lg -shadow-lg border-[1px] border-[#7CBECE]'}>
                <Text size={'5'} className={'w-full font-bold pb-[15px]'}>Recent Winners</Text>
                <div className='flex flex-wrap justify-around gap-y-[20px] h-[230px] overflow-y-auto border-[1px] border-[#7CBECE] p-1 rounded-[8px]'>
                    {winners.map((data, index) => (
                        <div className={'shadow-lg hover:scale-101 hover:-skew-y-[1deg] backdrop-blur-[10px] transform duration-200 flex flex-col gap-[10px] border-[1px] text-start items-center border-[#0E778F] p-1 rounded-[10px] w-[300px]'}>
                            <div key={index} className={'flex gap-[10px] justify-start hover:cursor-pointer items-center w-full'}
                                onClick={() => { navigate('/explorer/CryptoSecGuy') }}>
                                <CgProfile size={20} />
                                <p>@{data.username}</p>
                            </div>
                            <div className='flex flex-col h-[100px] gap-[10px] text-white bg-[#0E778F] rounded p-2'>
                                <Text size='1'>{data.competition}</Text>
                                <Text size='1'>Event : {data.event}</Text>
                                <Text size='1' className={'line-clamp-2'}>{data.desc}</Text>
                            </div>
                            <button className={'text-[0.5rem] text-white w-[150px] h-[30px] cursor-pointer bg-[#0E778F] rounded-[10px] hover:bg-gray-500 transition transform duration-400'}>
                                View on Explorer
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }      
    return (
        <div className={'bg-cover bg-contain bg-center text-[#0E778F] min-h-screen'} style={{
            backdropFilter: 'blur(10px)',
            backgroundImage: `url('/bui.png')`
        }}>
            <Nav color={'white'} background="black"/>
            <div className={'w-full flex-col lg:flex-row flex gap-[20px] px-2 py-[8px]'}>
                <div className={'flex flex-col px-[10px] rounded-1  rounded-md p-1 shadow-lg -shadow-lg'}>
                    <ActiveHacks hacksData={hacksData} />
                    <Bounties airdropEvents={airdropEvents} />
                </div>
                <div className={'flex flex-col px-[10px] rounded-1 rounded-md p-1 shadow-lg gap-[10px]'}>
                    <RecentWinners winners={recentWinners} />
                    <LiveFeedUpdate/>
                </div>
            </div>

        </div>
    )
}

