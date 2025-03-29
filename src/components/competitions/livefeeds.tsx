import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, Text } from "@radix-ui/themes";

export default function LiveUpdateFeed() {
  const messages = [
    "@CryptoSec.bui-sui just earned $500 from a bug bounty!",
    "@MetaArtist.bui-sui won $2000 for their NFT collection!",
    "@DeFiWriter.bui-sui received $750 for a research article!",
    "@AIxCrypto.bui-sui secured $5000 from a hackathon!",
    "@Web3Joker.bui-sui bagged 100 USDC from a meme contest!",
    "@LuckyAirdrop.bui-sui just claimed 50 USDC from an airdrop!",
    "@2ChainDropper.bui-sui received 75 USDT in an exclusive airdrop!",
    "@Web3Hodler.bui-sui secured 30 USDC from a governance airdrop!",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [updates, setUpdates] = useState<string[]>(() => {
    const storedUpdates = localStorage.getItem("liveUpdates");
    return storedUpdates ? JSON.parse(storedUpdates) : [messages[0]];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdates((prev) => {
        const nextUpdate = messages[(prev.length % messages.length)];
        const newUpdates = [...prev, nextUpdate];
        localStorage.setItem("liveUpdates", JSON.stringify(newUpdates));
        return newUpdates;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [updates]);

  return (
    <Card ref={containerRef} className="w-full overflow-y-auto text-white p-4">
      <Text size="5" className="w-full font-bold pb-4 text-[#0E778F]">
        Latest Feeds
      </Text>
      <AnimatePresence>
        <motion.div
          className="overflow-y-auto h-[300px] p-2 flex flex-col gap-[10px] overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 border-[1px] rounded-md"
        >
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-2 mb-2 rounded-md shadow-lg hover:scale-102 transform transition bg-[#8CEBFF]"
            >
              <Card className="p-2 text-[0.8rem] bg-[#0E778F]">
                <p>{update}</p>
                <p className="text-[0.6rem]">Time: {new Date().toLocaleTimeString()}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Card>
  );
}
