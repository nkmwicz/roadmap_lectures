import { atom, selector } from "recoil";

export const slideState = atom({
  key: "slideState",
  default: [],
});

export const index = atom({
  key: "index",
  default: 0,
});

export const currentSlide = selector({
  key: "currentSlide",
  get: ({ get }) => {
    const slides = get(slideState);
    const i = get(index);
    return slides[i];
  },
});

export const locationState = atom({
  key: "locationState",
  default: "Introduction",
});
