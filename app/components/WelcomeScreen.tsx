"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface WelcomeScreenProps {
  setCurrentStep: (step: number) => void;
}

export default function WelcomeScreen({ setCurrentStep }: WelcomeScreenProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoButtonHover = () => {
    setNoButtonPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 text-blue-500 animate-pulse">
        It&apos;s your special day!
      </h1>
      <p className="text-xl mb-8 text-pink-400">
        Do you want to see what I made for you?
      </p>
      <div className="flex justify-center items-center space-x-4">
        <motion.button
          className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentStep(0)}
        >
          Yes
        </motion.button>
        <motion.button
          className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold"
          animate={noButtonPosition}
          transition={{ type: "spring", stiffness: 300 }}
          onHoverStart={handleNoButtonHover}
        >
          No
        </motion.button>
      </div>
    </div>
  );
}
