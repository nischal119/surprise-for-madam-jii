"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Heart = ({
  size,
  duration,
  delay,
}: {
  size: number;
  duration: number;
  delay: number;
}) => (
  <motion.div
    className="absolute text-red-500"
    initial={{ opacity: 0, y: "100vh" }}
    animate={{
      opacity: [0, 1, 0],
      y: "-100vh",
      x: Math.random() * window.innerWidth,
    }}
    transition={{
      duration,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: Math.random() * 5,
    }}
    style={{ fontSize: size }}
  >
    ❤️
  </motion.div>
);

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }, (_, i) => (
      <Heart
        key={i}
        size={Math.random() * 20 + 10}
        duration={Math.random() * 10 + 10}
        delay={Math.random() * 5}
      />
    ));
    setHearts(newHearts);
  }, []);

  return <div className="fixed inset-0 pointer-events-none">{hearts}</div>;
}
