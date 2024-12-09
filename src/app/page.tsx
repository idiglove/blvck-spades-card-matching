import { Metadata } from "next";
import Game from "@/components/game";
import QueenSpadesImage from "@/assets/queen-spades.png";
import JokerRedImage from "@/assets/joker-red.png";
import JokerImage from "@/assets/joker.png";
import KingCloverImage from "@/assets/king-clover.png";
import KingSpadesImage from "@/assets/king-spades.png";
import KingImage from "@/assets/king.png";
import { CardType } from "@/types";

export const metadata: Metadata = {
  title: "Blvck Spades Card Matching Game",
  description: "Play our game to win discounts on our store",
};

export default function Home() {
  const cards: CardType[] = [
    {
      id: 1,
      name: "Queen of Spades",
      image: QueenSpadesImage,
      isFlipped: false,
      isCorrect: false,
    },
    {
      id: 2,
      name: "Joker Red",
      image: JokerRedImage,
      isFlipped: false,
      isCorrect: false,
    },
    {
      id: 3,
      name: "Joker",
      image: JokerImage,
      isFlipped: false,
      isCorrect: false,
    },
    {
      id: 4,
      name: "King of Clover",
      image: KingCloverImage,
      isFlipped: false,
      isCorrect: false,
    },
    {
      id: 5,
      name: "King of Spades",
      image: KingSpadesImage,
      isFlipped: false,
      isCorrect: false,
    },
    {
      id: 6,
      name: "King",
      image: KingImage,
      isFlipped: false,
      isCorrect: false,
    },
    {
      id: 7,
      name: "Queen of Spades",
      image: QueenSpadesImage,
      isFlipped: false,
      isCorrect: false,
    },
    {
      id: 8,
      name: "Joker Red",
      image: JokerRedImage,
      isFlipped: false,
      isCorrect: false,
    },
    {
      id: 9,
      name: "Joker",
      image: JokerImage,
      isFlipped: false,
      isCorrect: false,
    },
    {
      id: 10,
      name: "King of Clover",
      image: KingCloverImage,
      isFlipped: false,
      isCorrect: false,
    },
    {
      id: 11,
      name: "King of Spades",
      image: KingSpadesImage,
      isFlipped: false,
      isCorrect: false,
    },
    {
      id: 12,
      name: "King",
      image: KingImage,
      isFlipped: false,
      isCorrect: false,
    },
  ];

  const shuffledCards = cards.sort(() => Math.random() - 0.5);
  return (
    <main className="p-5 h-screen flex flex-col gap-8 row-start-2 items-center justify-center bg-white bg-custom bg-no-repeat bg-cover">
      <h1 className="text-3xl font-bold bg-gradient-to-t from-gold to-black-500 p-2 text-black">
        Blvck Spades Matching Game
      </h1>
      <Game shuffledCards={shuffledCards} />
    </main>
  );
}
