import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import React, { useMemo } from "react";

const names = [
  "jesus.bui.sui",
  "fuhad.bui.sui",
  "biokes.bui.sui",
  "dotannddev.bui.sui",
  "aliphatic.bui.sui",
  "bui.bui.sui",
  "funahhh.bui.sui",

];


export default function Names() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const namePositions = useMemo(() => {
    return names.map(() => ({
      top: `${Math.random() * 60 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    }));
  }, []);


  return (
    <div className="relative flex flex-col items-center space-y-6 p-6 h-[80vh] w-full">
      {/* Sui Names */}
      <div className="absolute top-0 left-0 w-full h-full">
        {names.map((name, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{
              opacity: 0.5,
              scale: 1,
              y: [0, -10, 10, 0], 
            }}
            transition={{
              duration: 4,
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
            className="absolute bg-white px-4 py-2 text-blue-400 rounded-full shadow-md text-sm font-medium transition-transform"
            style={namePositions[index]}
            >
            {name}
          </motion.div>
        ))}
      </div>

      {/* Name Box */}
      <h2 className="text-lg font-semibold z-10">Suinames</h2>
      <div className="relative w-full max-w-md z-10">
        <input
          type="text"
          placeholder="Search for a name"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          className="w-full rounded-lg border px-4 py-2 focus:outline-none"
        />
        <MagnifyingGlassIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}