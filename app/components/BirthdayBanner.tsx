"use client";

import { motion } from "framer-motion";

const RotatingLetter = ({
  letter,
  index,
}: {
  letter: string;
  index: number;
}) => {
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        delay: index * 0.1,
        y: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 5,
          ease: "easeInOut",
        },
      }}
    >
      {letter}
    </motion.span>
  );
};

export default function BirthdayBanner() {
  const text = "HAPPY BIRTHDAY";

  return (
    <div className="fixed inset-x-0 top-0 flex items-center justify-center pointer-events-none h-24 sm:h-32">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-800 text-center">
        {text.split("").map((letter, index) => (
          <RotatingLetter key={index} letter={letter} index={index} />
        ))}
      </h1>
    </div>
  );
}
