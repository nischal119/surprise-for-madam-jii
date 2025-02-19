"use client";
import { useEffect } from "react";

interface LightsControlProps {
  setBackgroundColor: (color: string) => void;
}

export default function LightsControl({
  setBackgroundColor,
}: LightsControlProps) {
  useEffect(() => {
    setBackgroundColor("bg-pink-200");
  }, [setBackgroundColor]); // Runs only once when the component mounts

  return (
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-bold mb-4 text-blue-400">
        Let&apos;s set the mood!
      </h2>
      <p className="mb-4 text-purple-400">
        The lights are now on, making it festive!
      </p>
    </div>
  );
}
