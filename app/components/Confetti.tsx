"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ConfettiPiece = ({
  color,
  side,
}: {
  color: string;
  side: "left" | "right";
}) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomRotation = Math.random() * 360;
  const randomDelay = Math.random() * 0.5;

  return (
    <motion.div
      className="absolute w-2 h-6"
      initial={{
        x: side === "left" ? "0" : "100vw",
        y: "100vh",
        scale: 0,
        rotate: 0,
      }}
      animate={{
        x: `${randomX}vw`,
        y: `${randomY}vh`,
        scale: 1,
        rotate: randomRotation,
      }}
      transition={{
        duration: 2 + Math.random(),
        ease: [0.23, 1, 0.32, 1],
        delay: randomDelay,
      }}
      style={{ backgroundColor: color }}
    />
  );
};

export default function Confetti() {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const colors = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
    ];
    const newConfetti = Array.from({ length: 200 }, (_, i) => (
      <ConfettiPiece
        key={i}
        color={colors[Math.floor(Math.random() * colors.length)]}
        side={i % 2 === 0 ? "left" : "right"}
      />
    ));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Time for confetti!
      </h2>
      {confetti}
    </div>
  );
}
