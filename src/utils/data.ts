import { IMessage } from "~/@types/IMessage";
import { getRandomImageUnsplash } from "./unsplash";

export const DATA: IMessage[] = [
  {
    content: "eu sou nazista e apoio israel",
    sender: "Camarada Ibra",
    sender_image: getRandomImageUnsplash(50),
    receiver: "Angus Bacon",
    sent_at: new Date(),
  },
  {
    content: "pare pare eu sou pro palestina",
    sender: "Angus Bacon",
    sender_image: getRandomImageUnsplash(50),
    receiver: "Camarada Ibra",
    sent_at: new Date(),
  },
  {
    content: "mas eu dou o chicote e gosto de israel",
    sender: "Camarada Ibra",
    sender_image: getRandomImageUnsplash(50),
    receiver: "Angus Bacon",
    sent_at: new Date(),
  },
  {
    content: "e vou pros estados unidos pq lá é massa e nao tem SUS",
    sender: "Camarada Ibra",
    sender_image: getRandomImageUnsplash(50),
    receiver: "Angus Bacon",
    sent_at: new Date(),
  },
  {
    content: "raleu, mofi, raleu",
    sender: "Angus Bacon",
    sender_image: getRandomImageUnsplash(50),
    receiver: "Camarada Ibra",
    sent_at: new Date(),
  },
];
