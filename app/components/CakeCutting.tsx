"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CakeCutting() {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-bold mb-4 text-purple-800">
        Time to cut the cake!
      </h2>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/cake-slice.png"
          alt="Cake Slice"
          width={200}
          height={200}
        />
      </motion.div>
    </div>
  );
}
