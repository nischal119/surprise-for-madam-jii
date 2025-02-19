"use client";

import { useState, useEffect, useRef } from "react";
import MusicPlayer from "../components/MusicPlayer";
import LightsControl from "../components/LightsControl";
import Balloons from "../components/Ballons";
import BirthdayBanner from "../components/BirthdayBanner";
import Confetti from "../components/Confetti";
import Message from "../components/Message";
import FloatingHearts from "../components/FloatingHearts";

export default function SurprisePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("bg-gray-100");
  const [isBlurred, setIsBlurred] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const steps = [
    { component: MusicPlayer, buttonText: "Turn Lights On" },
    { component: LightsControl, buttonText: "Add Balloons" },
    { component: Balloons, buttonText: "Show Birthday Banner" },
    { component: BirthdayBanner, buttonText: "Add Confetti" },
    { component: Confetti, buttonText: "Show Message" },
    { component: Message, buttonText: "Finish" },
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
    if (currentStep < steps.length - 1 && !isAnimating) {
      setIsAnimating(true);
      if (steps[currentStep + 1].component === Confetti) {
        setShowConfetti(true);
        setTimeout(() => {
          setCurrentStep(currentStep + 1);
          setIsAnimating(false);
        }, 5000);
      } else if (steps[currentStep + 1].component === Message) {
        setIsBlurred(true);
        setTimeout(() => {
          setCurrentStep(currentStep + 1);
          setIsAnimating(false);
        }, 1000);
      } else {
        setCurrentStep(currentStep + 1);
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }
    }
  };

  const CurrentComponent = steps[currentStep].component;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-24 ${backgroundColor} transition-all duration-1000 overflow-hidden ${
        isBlurred ? "backdrop-blur-md" : ""
      }`}
    >
      <FloatingHearts />
      {showConfetti && <Confetti />}
      <audio ref={audioRef} src="/happy-birthday.mp3" loop />
      <div className="z-10 w-full max-w-5xl">
        <CurrentComponent
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          setBackgroundColor={setBackgroundColor}
        />
      </div>
      <div className="z-20 w-full flex justify-center mb-8">
        {currentStep < steps.length - 1 && (
          <button
            onClick={handleNextStep}
            disabled={isAnimating}
            className={`mt-8 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 ${
              isAnimating ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {steps[currentStep + 1].buttonText}
          </button>
        )}
      </div>
    </main>
  );
}
