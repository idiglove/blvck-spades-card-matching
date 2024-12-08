"use client";
import Image, { StaticImageData } from "next/image";
import CardHolder from "./card-holder";

interface CardProps {
  onFlip: () => void;
  isFlipped: boolean;
  image: StaticImageData;
}

const Card = ({ onFlip, isFlipped, image }: CardProps) => {
  return (
    <div
      className="relative w-[150px] h-[220px]"
      style={{
        transformStyle: "preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        transition: "transform 0.6s",
        cursor: "pointer",
      }}
    >
      <CardHolder>
        <div className="bg-black w-[150px] h-[208px]" onClick={onFlip}></div>
      </CardHolder>
      <CardHolder
        style={{
          transform: "rotateY(180deg)",
        }}
      >
        <Image src={image} width={300} height={300} alt="card" />
      </CardHolder>
    </div>
  );
};

export default Card;
