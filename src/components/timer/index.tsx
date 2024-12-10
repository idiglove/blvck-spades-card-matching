"use client";
import confetti from "canvas-confetti";
import clsx from "classnames";
import { run } from "@/actions/connect";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

const TIME_TO_BEAT = 30;

interface TimerProps {
  gameEnded: boolean;
  playerWasSuccessful: boolean;
  onGameEnd: () => void;
}

const Timer = ({ gameEnded, onGameEnd, playerWasSuccessful }: TimerProps) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const winDialog = useRef<HTMLDialogElement>(null);
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

      winDialog.current?.showModal();

      return () => {
        clearInterval(interval);
      };
    }
  }, [gameEnded, playerWasSuccessful, time]);

  const submitReward = () => {
    const submit = async () => {
      await run({ email: "black-spades3@inboxkitten.com" });
    };

    submit();
    window.location.reload();
  };

  return (
    <>
      <div className="text-center p-2 bg-gold text-black">
        <h2 className="text-2xl font-bold">Time to beat: {TIME_TO_BEAT}s!</h2>
        <h3 className="text-5xl font-bold">{time}</h3>
      </div>
      <dialog ref={dialog} className={clsx("p-5 rounded-lg", styles.dialog)}>
        <div className="flex flex-col items-center">
          <p className="text-gold rounded-lg mb-2 block text-xl">Game Over!</p>
          <button
            className="p-1 text-white outline-none"
            onClick={() => {
              dialog.current?.close();
              window.location.reload();
            }}
          >
            Close
          </button>
        </div>
      </dialog>
      <dialog ref={winDialog} className={clsx("p-5 rounded-lg", styles.dialog)}>
        <div className="flex flex-col">
          <p className="text-gold rounded-lg mb-2 block text-xl">You win!</p>
          <input
            className="p-2 outline-none rounded-lg mb-2"
            type="email"
            placeholder="Enter your email"
          />
          <button
            className="p-1 text-white border-[1px] border-white rounded-lg"
            onClick={() => {
              winDialog.current?.close();
              submitReward();
            }}
          >
            Get your prize
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Timer;
