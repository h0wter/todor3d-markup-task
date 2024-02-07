import { SlideInfo } from "../types/slide-info.type.ts";

const useGetCurrentSlideIndex = (slides: SlideInfo[], id: string) => {
  return slides.findIndex((item) => item.id === id);
};

export { useGetCurrentSlideIndex };
