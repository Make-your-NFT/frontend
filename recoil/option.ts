import { atom } from "recoil";

export interface optionTypes {
  shirtShape: string;
  shirtSize: string;
  NFTsize: string;
}

export const todoState = atom<optionTypes>({
  key: "options",

  default: {
    shirtShape: "long",
    shirtSize: "L",
    NFTsize: "100",
  },
});
