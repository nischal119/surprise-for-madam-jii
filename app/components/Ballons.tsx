"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Balloon = ({ color }: { color: string }) => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 2;

  return (
    <motion.div
      className="absolute bottom-0"
      initial={{ y: "100vh" }}
      animate={{
        y: "-100vh",
        x: ["-10px", "10px", "-10px", "10px", "-10px"],
      }}
      transition={{
        y: { duration: 10 + Math.random() * 5, ease: "easeOut" },
        x: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 3 + Math.random() * 2,
        },
        delay: randomDelay,
      }}
      style={{ left: `${randomX}%` }}
    >
      <div
        className="w-8 h-10 sm:w-12 sm:h-16 rounded-full"
        style={{ backgroundColor: color }}
      />
      <div className="w-0.5 sm:w-1 h-12 sm:h-20 bg-gray-300 mx-auto" />
    </motion.div>
  );
};

export default function Balloons() {
  const [balloons, setBalloons] = useState<React.ReactNode>([]);
  useEffect(() => {
    const colors = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
    ];
    const newBalloons = Array.from({ length: 30 }, (_, i) => (
      <Balloon
        key={i}
        color={colors[Math.floor(Math.random() * colors.length)]}
      />
    ));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 h-screen pointer-events-none">
      <h2 className="text-4xl font-bold mb-4 text-center text-blue-400">
        Look at all these balloons!
      </h2>
      {balloons}
    </div>
  );
}
