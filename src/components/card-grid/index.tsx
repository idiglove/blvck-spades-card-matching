"use client";
import { useState } from "react";
import Card from "../card";
import QueenSpadesImage from "@/assets/queen-spades.png";
import JokerRedImage from "@/assets/joker-red.png";
import JokerImage from "@/assets/joker.png";
import KingCloverImage from "@/assets/king-clover.png";
import KingSpadesImage from "@/assets/king-spades.png";
import KingImage from "@/assets/king.png";

const CardGrid = () => {
  const cards = [
    {
      id: 1,
      name: "Queen of Spades",
      image: QueenSpadesImage,
      isFlipped: false,
    },
    {
      id: 2,
      name: "Joker Red",
      image: JokerRedImage,
      isFlipped: false,
    },
    {
      id: 3,
      name: "Joker",
      image: JokerImage,
      isFlipped: false,
    },
    {
      id: 4,
      name: "King of Clover",
      image: KingCloverImage,
      isFlipped: false,
    },
    {
      id: 5,
      name: "King of Spades",
      image: KingSpadesImage,
      isFlipped: false,
    },
    {
      id: 6,
      name: "King",
      image: KingImage,
      isFlipped: false,
    },{
      id: 7,
      name: "Queen of Spades",
      image: QueenSpadesImage,
      isFlipped: false,
    },
    {
      id: 8,
      name: "Joker Red",
      image: JokerRedImage,
      isFlipped: false,
    },
    {
      id: 9,
      name: "Joker",
      image: JokerImage,
      isFlipped: false,
    },
    {
      id: 10,
      name: "King of Clover",
      image: KingCloverImage,
      isFlipped: false,
    },
    {
      id: 11,
      name: "King of Spades",
      image: KingSpadesImage,
      isFlipped: false,
    },
    {
      id: 12,
      name: "King",
      image: KingImage,
      isFlipped: false,
    },
  ];

  const [cardsState, setCardsState] = useState(cards);

  const onFlip = (id: number) => {
    const _cards = cardsState.map((card) => {
      if (card.id === id) {
        card.isFlipped = !card.isFlipped;
      }
      return card;
    });

    setCardsState(_cards);
  };
  
  return (
    <div className="grid grid-cols-4 gap-1">
      {cardsState.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          onFlip={() => onFlip(card.id)}
          isFlipped={card.isFlipped}
        />
      ))}
    </div>
  );
};

export default CardGrid;
