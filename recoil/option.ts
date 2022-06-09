import { atom } from "recoil";

export interface optionTypes {
  shirtShape: string;
  shirtSize: string;
  NFTSize: number;
  position: string;
}

export const optionState = atom<optionTypes>({
  key: "options",
  default: {
    shirtShape: "long",
    shirtSize: "L",
    NFTSize: 100,
    position: "전면 전체",
  },
});
