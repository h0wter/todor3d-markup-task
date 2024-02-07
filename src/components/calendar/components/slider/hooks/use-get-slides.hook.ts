import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import { getSlides, getUpdatedSlides } from "../helpers/get-slides.helper.ts";
import { useGetCurrentSlideIndex } from "./use-get-current-slide-index.hook.ts";
import { compareDates } from "../helpers/compare-dates.helper.ts";

const useGetSlides = (slidesPerView: number, dateFromUrl: string | Date) => {
  const decodedDate = useMemo(() => dayjs(dateFromUrl).toDate(), [dateFromUrl]);

  const [{ slides, todaySlideId }, setSlides] = useState(
    getSlides(decodedDate, slidesPerView)
  );
  const [previousDates, setPreviousDates] = useState([decodedDate]);
  const todaySlideIndex = useGetCurrentSlideIndex(slides, todaySlideId);

  const selectedDateIndex = useMemo(
    () => slides.findIndex((item) => compareDates(decodedDate, item.date)),
    [decodedDate, slides]
  );

  useEffect(() => {
    setPreviousDates((prevState) => {
      if (
        prevState[prevState.length - 1] &&
        compareDates(prevState[prevState.length - 1], decodedDate)
      ) {
        return prevState;
      } else {
        return [...prevState, decodedDate];
      }
    });

    const selectedDateIdx = slides.findIndex((item) =>
      compareDates(decodedDate, item.date)
    );
    if (
      selectedDateIdx === -1 ||
      slides.length - 1 - selectedDateIdx < 3 ||
      selectedDateIdx < 3
    ) {
      const updatedSlides = getUpdatedSlides(
        slides,
        decodedDate,
        todaySlideIndex
      );

      setSlides((prevState) => ({
        ...prevState,
        slides: updatedSlides.slides,
      }));
    }
  }, [decodedDate, slides, todaySlideIndex]);
  return {
    slides,
    setSlides,
    todaySlideId,
    todaySlideIndex,
    previousDates,
    selectedDateIndex,
  };
};

export { useGetSlides };
