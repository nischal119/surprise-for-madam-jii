"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DecorationProps {
  type: "balloons" | "banner" | "confetti";
}

export default function Decoration({ type }: DecorationProps) {
  const decorations = {
    balloons: {
      name: "Balloons",
      src: "/balloon.png",
      position: "top-10 left-10",
    },
    banner: {
      name: "Banner",
      src: "/banner.png",
      position: "top-1/4 right-10",
    },
    confetti: {
      name: "Confetti",
      src: "/confetti.png",
      position: "bottom-10 left-1/4",
    },
  };

  const currentDecoration = decorations[type];

  return (
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-bold mb-4 text-purple-800">
        Let&apos;s add some {currentDecoration.name}!
      </h2>
      <div className="relative w-full h-[400px]">
        <motion.div
          className={`absolute ${currentDecoration.position}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={currentDecoration.src}
            alt={currentDecoration.name}
            width={100}
            height={100}
          />
        </motion.div>
      </div>
    </div>
  );
}
