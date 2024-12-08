"use client";
import { useState } from "react";
import CardGrid from "../card-grid";
import Timer from "../timer";

const Game = () => {
  const [gameEnded, setGameEnded] = useState(false);
  return (
    <>
      <Timer gameEnded={gameEnded} />
      <CardGrid onGameEnd={() => setGameEnded(true)} />
    </>
  );
};
export default Game;
