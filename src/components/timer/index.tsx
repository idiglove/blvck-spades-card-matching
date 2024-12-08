"use client";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

interface TimerProps {
  gameEnded: boolean;
}

const Timer = ({ gameEnded }: TimerProps) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    if (gameEnded) {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [gameEnded, time]);

  useEffect(() => {
    if (gameEnded) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
    }
  }, [gameEnded]);

  return (
    <div className="text-center p-2 bg-gold text-black">
      <h2 className="text-2xl font-bold">Timer</h2>
      <h3 className="text-5xl font-bold">{time}</h3>
    </div>
  );
};

export default Timer;
