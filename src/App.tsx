import { ConnectButton } from "@mysten/dapp-kit";
import { Box, Flex, Heading, Card } from "@radix-ui/themes";

function App() {
  const infos = [
    {
      header: 'information processing',
      desc: ' Create an amazing page that represents you and your story, then share it and instantly start to collect online donations.',
      image: 'https://lh5.googleusercontent.com/xLshZALbSZMB7YnNKMbJjRy9nJBEHVjCvR3vj4tMIFlxXKBZ-NDJpCOfawwW7WPA9YYW_fODbuF8Vd4pL5mSH6YT7romKoq3f1jblLZmHS6N08R7p5Vp5fE4Gf22REXhLtcKDwCy2K7QVBt0Ydpm0rw'
    },
    {
      header: 'information processing',
      desc: ' Create an amazing page that represents you and your story, then share it and instantly start to collect online donations.',
      image: 'https://lh5.googleusercontent.com/xLshZALbSZMB7YnNKMbJjRy9nJBEHVjCvR3vj4tMIFlxXKBZ-NDJpCOfawwW7WPA9YYW_fODbuF8Vd4pL5mSH6YT7romKoq3f1jblLZmHS6N08R7p5Vp5fE4Gf22REXhLtcKDwCy2K7QVBt0Ydpm0rw'
    },
    {
      header: 'information processing',
      desc: ' Create an amazing page that represents you and your story, then share it and instantly start to collect online donations.',
      image: 'https://lh5.googleusercontent.com/xLshZALbSZMB7YnNKMbJjRy9nJBEHVjCvR3vj4tMIFlxXKBZ-NDJpCOfawwW7WPA9YYW_fODbuF8Vd4pL5mSH6YT7romKoq3f1jblLZmHS6N08R7p5Vp5fE4Gf22REXhLtcKDwCy2K7QVBt0Ydpm0rw'
    },
    {
      header: 'information processing',
      desc: ' Create an amazing page that represents you and your story, then share it and instantly start to collect online donations.',
      image: 'https://lh5.googleusercontent.com/xLshZALbSZMB7YnNKMbJjRy9nJBEHVjCvR3vj4tMIFlxXKBZ-NDJpCOfawwW7WPA9YYW_fODbuF8Vd4pL5mSH6YT7romKoq3f1jblLZmHS6N08R7p5Vp5fE4Gf22REXhLtcKDwCy2K7QVBt0Ydpm0rw'
    },
  ]

  return (
    <div className='min-h-screen w-full'>
      <Flex
        position="sticky" px="4" py="2" justify="between"
        style={{ backgroundColor: "var(--gray-a2)", backdropFilter: 'blur(20px)', border: '1px solid black', width: '100%' }}>
        <Box>
          <Heading>Bui</Heading>
        </Box>
        <Box>
          <ConnectButton />
        </Box>
      </Flex>
      <div>

      </div>
      <div className="flex flex-col justify-center h-[300px] items-center object-center object-cover text-center" style={{
        backgroundImage: 'url(https://tkcdn.tekedia.com/wp-content/uploads/2021/01/07152622/crowdfunding-1-768x432.png)',
        backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <div className="flex flex-col justify-center items-center gap-[30px] p-[10px] rounded border-[1px] shadow-md border-gray-800"
          style={{ width: 'min(90%,400px)', backdropFilter: 'blur(40px)' }}>
          <Heading size={'4'}>Bridging Support for Everyone</Heading>
          <p style={{ width: 'min(95%,400px)' }} className={'text-center font-[500] text-[0.7rem] md:text-[0.9rem]'}>
            Discover a platform built to support blockchain initiatives, fully funded and driven by our vibrant community.
            <br />Join us to explore the future of decentralized technology.
          </p>
        </div>
      </div>
      <p className={'w-full text-center text-[1.2rem] font-bold py-[30px_10px]'}> Everything you need to know</p>
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
    </div>
  );
}

export default App;
