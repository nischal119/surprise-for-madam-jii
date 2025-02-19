"use client";

interface LightsControlProps {
  setBackgroundColor: (color: string) => void;
}

export default function LightsControl({
  setBackgroundColor,
}: LightsControlProps) {
  setBackgroundColor("bg-pink-200");

  return (
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-bold mb-4 text-blue-400">
        Let's set the mood!
      </h2>
      <p className="mb-4 text-purple-400">
        The lights are now on, making it festive!
      </p>
    </div>
  );
}
