"use client";
import { useState } from "react";
import CardGrid from "../card-grid";
import Timer from "../timer";
import { CardType } from "@/types";

interface GameProps {
  shuffledCards: CardType[];
}

const Game = ({ shuffledCards }: GameProps) => {
  const [gameEnded, setGameEnded] = useState(false);
  return (
    <>
      <Timer gameEnded={gameEnded} />
      <CardGrid onGameEnd={() => setGameEnded(true)} cards={shuffledCards} />
    </>
  );
};
export default Game;
