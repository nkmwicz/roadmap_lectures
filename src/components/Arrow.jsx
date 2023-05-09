import { Arrows } from "@nkmwicz/reactpresentation";
import { useRecoilState, useRecoilValue } from "recoil";
import { index, slideState } from "./globalState";

export function Arrow() {
  const slides = useRecoilValue(slideState);
  const [slideIndex, setSlideIndex] = useRecoilState(index);

  function nextSlide(e) {
    if (e && slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
    if (e && slideIndex === slides.length - 1) {
      setSlideIndex(0);
    }
  }

  function prevSlide(e) {
    if (e && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
    if (e && slideIndex === 0) {
      setSlideIndex(slides.length - 1);
    }
  }

  return <Arrows handleNextClick={nextSlide} handlePrevClick={prevSlide} />;
}
