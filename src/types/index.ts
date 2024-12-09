import { StaticImageData } from "next/image";

export interface CardType {
  id: number;
  name: string;
  image: StaticImageData;
  isFlipped: boolean;
  isCorrect: boolean;
}
