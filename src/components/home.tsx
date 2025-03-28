import { Card, Heading } from "@radix-ui/themes";
import Nav from "./names/nav";
import Names from "./names/names";
import BuiCta from "./names/cta";
import Faq from "./names/faq";
import HeadCta from "./names/headCta";
import Footer from "./footer";

export default function Honme() {
    const infos = [
        {
            header: 'Verified Competitions',
            desc: ' Every competition listed on Bui is vetted for legitimacy, ensuring real opportunities with guaranteed rewards.',
            image: 'https://lh5.googleusercontent.com/xLshZALbSZMB7YnNKMbJjRy9nJBEHVjCvR3vj4tMIFlxXKBZ-NDJpCOfawwW7WPA9YYW_fODbuF8Vd4pL5mSH6YT7romKoq3f1jblLZmHS6N08R7p5Vp5fE4Gf22REXhLtcKDwCy2K7QVBt0Ydpm0rw'
        },
        {
            header: 'Secure Fund Management',
            desc: ' Prize pools are held and disbursed on-chain, eliminating fraud and ensuring winners get paid instantly.',
            image: 'https://lh5.googleusercontent.com/xLshZALbSZMB7YnNKMbJjRy9nJBEHVjCvR3vj4tMIFlxXKBZ-NDJpCOfawwW7WPA9YYW_fODbuF8Vd4pL5mSH6YT7romKoq3f1jblLZmHS6N08R7p5Vp5fE4Gf22REXhLtcKDwCy2K7QVBt0Ydpm0rw'
        },
        {
            header: 'Information processing',
            desc: ' Track all competition transactions in real-time, verify payouts, and confirm organizer credibility through our blockchain-integrated explorer.',
            image: 'https://lh5.googleusercontent.com/xLshZALbSZMB7YnNKMbJjRy9nJBEHVjCvR3vj4tMIFlxXKBZ-NDJpCOfawwW7WPA9YYW_fODbuF8Vd4pL5mSH6YT7romKoq3f1jblLZmHS6N08R7p5Vp5fE4Gf22REXhLtcKDwCy2K7QVBt0Ydpm0rw'
        },
        {
            header: '.bui sui Identity Tags',
            desc: ' Build your Web3 reputation with a verifiable .bui-sui tag that showcases your competition history and achievements.',
            image: 'https://lh5.googleusercontent.com/xLshZALbSZMB7YnNKMbJjRy9nJBEHVjCvR3vj4tMIFlxXKBZ-NDJpCOfawwW7WPA9YYW_fODbuF8Vd4pL5mSH6YT7romKoq3f1jblLZmHS6N08R7p5Vp5fE4Gf22REXhLtcKDwCy2K7QVBt0Ydpm0rw'
        },
    ]

    return (
        <div className='min-h-screen w-full'>
            <Nav />
            <div>
            </div>
            <div className="flex flex-col justify-center h-[300px] items-center object-center object-cover text-center" style={{
                backgroundImage: 'url(https://tkcdn.tekedia.com/wp-content/uploads/2021/01/07152622/crowdfunding-1-768x432.png)',
                backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>
                <div className="flex flex-col justify-center items-center gap-[30px] p-[10px] rounded border-[1px] shadow-md border-gray-800"
                    style={{ width: 'min(90%,400px)', backdropFilter: 'blur(40px)' }}>
                    <Heading size={'4'}>Powering Transparent & Rewarding Web3 Competitions</Heading>
                    <p style={{ width: 'min(95%,400px)' }} className={'text-center font-[500] text-[0.7rem] md:text-[0.9rem]'}>
                    Join real competitions, earn verified rewards, and build your Web3 reputation.
                    </p>
                </div>
                <HeadCta/>
            </div>
            <Names />

            <p className={'w-full text-center text-[1.2rem] font-bold py-[30px_10px]'}> Our Key Services You Can Enjoy</p>
            <div className={"py-[20px] px-[20px] md:px-0 gap-[20px] flex flex-wrap justify-center items-center"}>
                {infos.map((data, index) => (<Card className={'w-[300px] max-w-[400px] md:max-w-[320px]  trasform'}>
                    <div key={index} className="w-[100%] h-[100px] rounded overflow-hidden">
                        <img className={'object-cover objecr-contain'}
                            src={data.image} alt="" />
                    </div>
                    <div className='gap-[10px] flex flex-col pt-[20px]'>
                        <Heading className={'capitalize'}>{data.header}</Heading>
                        <p className={"text-[0.7rem] max-w-[300px] w-[90%] line-clamp-3"}>{data.desc}</p>
                    </div>
                </Card>))}
            </div>

            <BuiCta />
            <Faq />
            <Footer />

        </div>
    );
}