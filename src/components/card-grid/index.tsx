"use client";
import { useState } from "react";
import Card from "../card";
import { CardType } from "@/types";

interface CardGridProps {
  onGameEnd: () => void;
  cards: CardType[];
}

const CardGrid = ({ onGameEnd, cards }: CardGridProps) => {
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

    const allCorrect = _cards.every((card) => card.isCorrect);
    if (allCorrect) {
      onGameEnd();
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
