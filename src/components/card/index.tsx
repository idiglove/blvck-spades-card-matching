"use client";
import Image from "next/image";
import CardImage from "@/assets/queen-spades.png";
import CardHolder from "./card-holder";

interface CardProps {
  onFlip: () => void;
  isFlipped: boolean;
}

const Card = ({ onFlip, isFlipped }: CardProps) => {
  return (
    <div
      className="relative w-full h-screen"
      style={{
        transformStyle: "preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        transition: "transform 0.6s",
        cursor: "pointer",
      }}
    >
      <CardHolder>
        <div className="bg-black w-[300px] h-[300px]" onClick={onFlip}></div>
      </CardHolder>
      <CardHolder style={{ transform: "rotateY(180deg)" }}>
        <Image src={CardImage} width={300} height={300} alt="card" />
      </CardHolder>
    </div>
  );
};

export default Card;
