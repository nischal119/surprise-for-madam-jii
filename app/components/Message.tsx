"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Message() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl px-8 py-12 rounded-2xl shadow-neomorphic bg-pink-100 flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-purple-800">
        Happy Birthday to the most special person in my life.
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-pink-600 mb-8">
        I can&apos;t wait to spend many more birthdays with you. I love you! and
        I hope I will be there on your next birthday.
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Image
          src="/US.jpeg"
          alt="Heart"
          width={200}
          height={200}
          className="mx-auto"
        />
      </motion.div>
    </motion.div>
  );
}
