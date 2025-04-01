import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { names } from "../../utils";

export default function Names() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const namePositions = useMemo(() => {
    return names.names.map(() => ({
      top: `${Math.random() * 60 + 20}%`,
      left: `${Math.random() * 70 + 15}%`,
    }));
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term) {
      const results = names.names.filter((name) =>
        name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="relative flex flex-col items-center space-y-6 p-6 h-screen w-full bg-white">
      {/* Floating Sui Names */}
      <div className="absolute inset-0 flex justify-center items-center">
        {names.names.map((name, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              scale: 1.1,
              filter: "blur(0px)",
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2, filter: "blur(0px)" }}
            className="
            absolute
            flex 
            items-center
            px-5
            py-3 
            rounded-full 
            shadow-lg 
            text-base 
            font-semibold 
            transition-transform 
            space-x-3 
            bg-white/30 
            backdrop-blur-lg 
            border 
            border-white/40"
            style={namePositions[index]}
          >
            {/* Profile Icon */}
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-700">{name}</span>
          </motion.div>
        ))}
      </div>

      {/* Search Section (Title + Input) */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-10 text-center">
        {/* Title (Centered Above Search Box) */}
        <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center justify-center space-x-2">
          <span className="text-blue-500">●</span>
          <span>Buinames</span>
        </h2>

        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="SEARCH FOR A NAME"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-5 py-4 text-lg focus:outline-none shadow-lg bg-white/60 backdrop-blur-xl placeholder-gray-500 text-black"
          />
          <MagnifyingGlassIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
          {searchResults.length > 0 && (
            <ul className="absolute left-0 mt-2 w-full rounded-md bg-white shadow-lg">
              {searchResults.map((result) => (
                <li
                  key={result}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                >
                  {result}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}