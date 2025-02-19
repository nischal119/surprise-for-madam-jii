"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [message, setMessage] = useState("It's your special day.");
  const [showButtons, setShowButtons] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Do you want to see what I made for you?");
      setShowButtons(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleNoButtonHover = () => {
    setNoButtonPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  return (
    <div className="text-center mb-8">
      <h1 className="text-6xl font-bold mb-8 text-purple-800 animate-pulse">
        {message}
      </h1>
      {showButtons && (
        <div className="flex justify-center items-center space-x-4">
          <Link href="/surprise">
            <motion.button
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Yes
            </motion.button>
          </Link>
          <motion.button
            className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
            animate={noButtonPosition}
            transition={{ type: "spring", stiffness: 300 }}
            onHoverStart={handleNoButtonHover}
          >
            No
          </motion.button>
        </div>
      )}
    </div>
  );
}
