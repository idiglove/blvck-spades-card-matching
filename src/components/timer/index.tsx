"use client";
import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";
import "./style.module.scss";
// import { run } from "@/actions/connect";

const TIME_TO_BEAT = 20;

interface TimerProps {
  gameEnded: boolean;
  playerWasSuccessful: boolean;
  onGameEnd: () => void;
}

const Timer = ({ gameEnded, onGameEnd, playerWasSuccessful }: TimerProps) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    if (time >= TIME_TO_BEAT) {
      onGameEnd();
      clearInterval(timerInterval);
    }

    if (gameEnded) {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [gameEnded, onGameEnd, time]);

  useEffect(() => {
    if (gameEnded && !playerWasSuccessful) {
      dialog.current?.showModal();
      return;
    }
    if (gameEnded && playerWasSuccessful) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = setInterval(() => {
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

      // const getDB = async () => {
      //   await run(time, "John Doe", "black-spades1@inboxkitten.com");
      // };

      // getDB();

      return () => {
        clearInterval(interval);
      };
    }
    // }, []);
  }, [gameEnded, playerWasSuccessful, time]);

  return (
    <div className="text-center p-2 bg-gold text-black">
      <h2 className="text-2xl font-bold">Time to beat: {TIME_TO_BEAT}s!</h2>
      <h3 className="text-5xl font-bold">{time}</h3>
      <dialog ref={dialog} className="p-5 rounded-lg dialog">
        <p className="text-gold rounded-lg mb-2 block text-xl">Game Over!</p>
        <button
          className="p-1 text-white"
          onClick={() => {
            dialog.current?.close();
            window.location.reload();
          }}
        >
          Close
        </button>
      </dialog>
    </div>
  );
};

export default Timer;
