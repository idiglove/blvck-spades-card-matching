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

  const [cardsState, setCardsState] = useState(cards);
  const [disabled, setDisabled] = useState(false);

  const onFlip = (id: number) => {
    let _cards = cardsState.map((card) => {
      if (card.id === id && !card.isCorrect) {
        card.isFlipped = !card.isFlipped;
      }
      return card;
    });

    const flipped = _cards.filter((card) => card.isFlipped && !card.isCorrect);
    if (flipped.length === 2) {
      setDisabled(true);
      const [first, second] = flipped;
      if (first.name === second.name) {
        _cards = _cards.map((card) => {
          if ([first.id, second.id].includes(card.id)) {
            card.isCorrect = true;
          }
          setDisabled(false);
          return card;
        });
      } else {
        setTimeout(() => {
          setCardsState(
            _cards.map((card) => {
              if (card.isFlipped && !card.isCorrect) {
                card.isFlipped = false;
              }
              setDisabled(false);
              return card;
            })
          );
        }, 1000);
      }
    }    
    setCardsState(_cards);
  };

  return (
    <div className="grid grid-cols-4 gap-1">
      {cardsState.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          disabled={disabled || card.isCorrect}
          onFlip={() => onFlip(card.id)}
          isFlipped={card.isFlipped}
        />
      ))}
    </div>
  );
};

export default CardGrid;
