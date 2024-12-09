import Game from "@/components/game";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blvck Spades Card Matching Game",
  description: "Play our game to with discounts on our store",
};

export default function Home() {
  return (
    <main className="h-screen flex flex-col gap-8 row-start-2 items-center justify-center bg-white bg-custom bg-no-repeat bg-cover">
      <h1 className="text-3xl font-bold bg-gradient-to-t from-gold to-black-500 p-2 text-black">
        Blvck Spades Matching Game
      </h1>
      <Game />
    </main>
  );
}
