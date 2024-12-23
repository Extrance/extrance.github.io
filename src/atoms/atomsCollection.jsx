import { atom } from "recoil";

export const atomCollection = atom({
  key: "atomCollection",
  default: {
    num: "",
    name: "",
    brand: "all",
  },
});
