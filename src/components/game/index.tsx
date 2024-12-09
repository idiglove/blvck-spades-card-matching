"use client";
import { useState } from "react";
import CardGrid from "../card-grid";
import Timer from "../timer";
import { CardType } from "@/types";

interface GameProps {
  shuffledCards: CardType[];
}

const Game = ({ shuffledCards }: GameProps) => {
  const [playerWasSuccessful, setPlayerWasSuccessful] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  return (
    <>
      <Timer
        gameEnded={gameEnded}
        onGameEnd={() => setGameEnded(true)}
        playerWasSuccessful={playerWasSuccessful}
      />
      <CardGrid
        onGameEnd={({ didPlayerComplete }: { didPlayerComplete: boolean }) => {
          if (didPlayerComplete) {
            setPlayerWasSuccessful(true);
          }
          setGameEnded(true);
        }}
        cards={shuffledCards}
        gameEnded={gameEnded}
      />
    </>
  );
};
export default Game;
