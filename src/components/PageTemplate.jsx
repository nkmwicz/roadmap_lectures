/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {
  QuickLayoutNoArrows,
  cacheImages,
  Spinner,
} from "@nkmwicz/reactpresentation";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentSlide, index, slideState } from "../components/globalState";

export function PageTemplate({ url }) {
  const [slides, setSlides] = useRecoilState(slideState);
  const slide = useRecoilValue(currentSlide);
  const [isLoading, setIsLoading] = React.useState(true);
  const [slideIndex, setSlideIndex] = useRecoilState(index);

  React.useEffect(() => {
    async function fetchSlides() {
      const res = await fetch(url);
      const data = await res.json();
      setSlides(data.slides);
      await cacheImages(data.images);
      setIsLoading(false);
      setSlideIndex(0);
    }
    fetchSlides();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return <QuickLayoutNoArrows mode={"dark"} slide={slide} />;
}
