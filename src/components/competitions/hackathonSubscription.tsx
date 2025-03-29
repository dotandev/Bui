import { Card, Flex, Text } from "@radix-ui/themes";
import Footer from "../footer";
import Nav from "../names/nav";
import { GoBriefcase } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";


export default function Hackathon() {

    const data = {
        image: '',
        eventName: 'Bui Defi Innovation Hackathon',
        desc: 'Build the next generation of DeFi applications on Sui! Compete to create innovative lending protocols, DEXs, and stablecoin solutions.',
        organizers: '',
        prize: '',
        deadline: 'July 30th, 2025',
        positions: {
            first: '25000',
            second: '15000',
            third: '10000',
        }
    }

    return (
        <div style={{ backgroundImage: 'url(/bui.png)', backgroundRepeat: 'no-repeat' }} className={'bg-cover bg-contain'} >
            <Nav background="black" color='white'/>
            <div className="flex flex-col lg:flex-row p-2 gap-[10px] bg-cover bg-contain">
                <div className={'flex flex-co bg-[#0E778F] text-white p-1 rounded-[10px] lg:w-[600px] justify-between'}>
                    <div className={'w-[100%] h-[100px] border-[#0E778F] rounded-[12px] border-[1px] overflow-hidden'}>
                        <img src={'https://i.pinimg.com/736x/a6/e9/2e/a6e92e2f61ec5404a33b1f46539d0825.jpg'}
                            className={'object-cover object-contain w-full h-full hover:scale-105 transition-all transform duration-400'}
                            alt="hack" />
                    </div>
                    <div className={'w-full gap-[10px] items-center flex flex-col p-1'}>
                        <Card className={'flex flex-col gap-[5px] w-full '}>
                            <h1 className={'text-[1.5rem] line-clamp-1'}>{data.eventName}</h1>
                            <p className={'text-[0.7rem]'}>Organizers : {data.organizers}</p>
                            <p className={'line-clamp-2 text-[0.7rem]'}>{data.desc}</p>
                            <div className={'flex flex-col  items-start  py-[4px] text-[0.65rem]'}>
                                <Text size={"4"}>Prize</Text>
                                <Text size={"2"} className='flex'>{data.positions.first} <span className="pl-[15px]">(1st)</span></Text>
                                <Text size={"2"} className='flex'>{data.positions.second} <span className="pl-[15px]">(2nd)</span></Text>
                                <Text size={"2"} className='flex'>{data.positions.third} <span className="pl-[15px]">(3rd)</span></Text>
                            </div>
                            <div className={'flex p-1  gap-[25px]'}>
                                <section className={'flex flex-col pl-[10px] text-[0.7rem] items-center'}>
                                    <article className={'flex gap-[10px] items-center'}>
                                        <GoBriefcase size={25} />
                                        <h4>211</h4>
                                    </article>
                                    <h4 className="text-[0.85rem]">submissions</h4>
                                </section>
                                <section className={'flex flex-col pl-[10px] text-[0.7rem] items-start'}>
                                    <article className={'flex gap-[10px] items-center'}>
                                        <IoIosTimer size={25} />
                                        <h4>{data.deadline}</h4>
                                    </article>
                                    <h4 className="text-[0.85rem]">Deadline</h4>
                                </section>
                            </div>
                            <button className={'text-[0.5rem] border-[1px] border-gray-800 w-[130px] h-[27px] cursor-pointer bg-[#0E778F] rounded-[10px] hover:bg-gray-500 transition transform duration-400'}>
                                Join now
                            </button>                        </Card>
                    </div>
                </div>
                <Card className={'p-2 bg-[#0E778F] text-[0.85rem] gap-2'}>
                    <section className={'py-2'}>
                        <Text size={'3'}>About the Hackathon</Text>
                        <p>
                            There's growing interest in building on Solana, but many teams tend to focus on similar
                            or mainstream ideas. This limits true bottom-up innovation. To tackle this, Zee Prime and
                            Superteam are launching a Hackathon with those two phases — phase one to source ideas,
                            and phase two to build them into products.
                        </p>
                    </section>
                    <section>
                        <Text size={'3'}>Scope of this Bounty: Phase 1 (Ideas)</Text>
                        <p>
                            This bounty is to surface fresh, unique, and fundable and buildable Web3 ideas.
                        </p>
                        <ul className={' py-3 flex flex-col gap-1'}>
                            <li>Ban buzzwords – if your idea relies on vague terms or hype, you'll be eliminated.
                                If you can't explain it clearly without jargon, it's not a strong idea.
                            </li>
                            <li>
                                Fund novel ideas – reward creativity and originality.
                            </li>
                            <li>
                                Build what wins – the best ideas will move into the next phase,
                                where developers can bring them to life in the hackathon.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <Text size={'3'}>Submission Requirements</Text>
                        <ul className={' py-3 flex flex-col gap-1'}>
                            <li>
                                Use the provided template and submit the link to your Google doc.
                            </li>
                            <li>
                                Sharing settings of your Google doc are set to “Anyone with link” can view.
                            </li>
                            <li>
                                Avoid buzzwords—using them can result in disqualification
                            </li>
                        </ul>
                    </section>
                    <section>
                        <Text size={'3'}>Judging and Selection</Text>
                        <ul>
                            <li>
                                A committee of judges will review all submissions and select the shortlisted ideas.
                            </li>
                            <li>
                                These ideas will be made public for developers to choose from in the hackathon phase.
                            </li>
                            <li>
                                Final decision on winners rests with the organizing team.
                            </li>
                        </ul>
                    </section>
                </Card>
            </div>
            <Footer />
        </div>
    )
}