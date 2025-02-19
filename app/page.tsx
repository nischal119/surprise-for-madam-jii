"use client";

import { useState, useEffect, useRef } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import MusicPlayer from "./components/MusicPlayer";
import LightsControl from "./components/LightsControl";
import Balloons from "./components/Ballons";
import BirthdayBanner from "./components/BirthdayBanner";
import Confetti from "./components/Confetti";
import Message from "./components/Message";
import FloatingHearts from "./components/FloatingHearts";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(-1); // Start at -1 for welcome screen
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("bg-gray-100");
  const [isBlurred, setIsBlurred] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const steps = [
    { component: MusicPlayer, buttonText: "Play Music" },
    { component: LightsControl, buttonText: "Turn Lights On" },
    { component: Balloons, buttonText: "Fly in some Ballons" },
    { component: BirthdayBanner, buttonText: "Time for Banner" },
    { component: Confetti, buttonText: "A celebration" },
    { component: Message, buttonText: "Final Surprise" },
  ];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      if (steps[currentStep + 1].component === Confetti) {
        setShowConfetti(true);
      } else if (steps[currentStep + 1].component === Message) {
        setIsBlurred(true);
      }
    }
  };

  const CurrentComponent =
    currentStep >= 0 ? steps[currentStep].component : WelcomeScreen;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-24 ${backgroundColor} transition-all duration-1000 overflow-hidden  ${
        isBlurred ? "backdrop-blur-md" : ""
      }`}
    >
      <FloatingHearts />
      {showConfetti && <Confetti />}
      <audio ref={audioRef} src="/happy-birthday.mp3" loop />
      <div className="z-10 w-full max-w-5xl">
        <CurrentComponent
          setCurrentStep={setCurrentStep}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          setBackgroundColor={setBackgroundColor}
        />
      </div>
      {currentStep >= 0 && currentStep < steps.length - 1 && (
        <div className="z-20 w-full flex justify-center mb-8">
          <button
            onClick={handleNextStep}
            className="mt-8 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
          >
            {steps[currentStep + 1].buttonText}
          </button>
        </div>
      )}
    </main>
  );
}
