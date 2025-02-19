"use client";

import { motion } from "framer-motion";

interface MusicPlayerProps {
  setIsPlaying: (isPlaying: boolean) => void;
  isPlaying: boolean;
}

export default function MusicPlayer({
  setIsPlaying,
  isPlaying,
}: MusicPlayerProps) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-pink-400">
        It's time for some music!
      </h2>
      <motion.button
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "Pause Music" : "Play Birthday Music"}
      </motion.button>
    </div>
  );
}
