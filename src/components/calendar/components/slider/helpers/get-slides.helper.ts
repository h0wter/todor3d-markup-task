import { nanoid } from "nanoid";
import dayjs from "dayjs";
import { generateRandomMatchesNumber } from "./generate-random-matches-number.helper.ts";
import { type SlideInfo } from "../types/slide-info.type.ts";

const ADDITIONAL_SLIDES_PER_SIDE = 3;
const ADDITIONAL_SLIDES_TOTAL = ADDITIONAL_SLIDES_PER_SIDE * 2;

const getFormattedDate = (date: Date) => {
  const rawDate = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
  }).format(date);
  const reversedDateArray = rawDate.split(" ").reverse().join(" ");

  return reversedDateArray;
};

const getSlides = (initialDate: Date, slidesPerView: number) => {
  let slidesCount = slidesPerView + ADDITIONAL_SLIDES_TOTAL;
  slidesCount % 2 === 1 ? slidesCount : (slidesCount += 1);

  const middleSlide = Math.ceil(slidesCount / 2);

  const slides = [];

  let todaySlideId;

  for (let i = 1; i <= slidesCount; i++) {
    const numberOfMatches = generateRandomMatchesNumber();
    const id = nanoid();
    if (i === middleSlide) {
      todaySlideId = id;
      const formattedDate = getFormattedDate(initialDate);
      slides.push({
        title: formattedDate,
        date: initialDate,
        numberOfMatches,
        id,
      });
    } else {
      const newDate = new Date(initialDate);
      const numberOfDaysToAdd = i - middleSlide;
      newDate.setDate(initialDate.getDate() + numberOfDaysToAdd);
      const formattedDate = getFormattedDate(newDate);
      slides.push({
        title: formattedDate,
        date: newDate,
        numberOfMatches,
        id,
      });
    }
  }

  return { slides, todaySlideId: todaySlideId as string };
};

const getNextOrPrevSlide = (
  slide: SlideInfo,
  direction: "forward" | "backward"
) => {
  const numberOfMatches = generateRandomMatchesNumber();
  const id = nanoid();

  const updatedDate = new Date(slide.date);
  const step = direction === "forward" ? 1 : -1;
  updatedDate.setDate(slide.date.getDate() + step);
  const formattedDate = getFormattedDate(updatedDate);

  return {
    title: formattedDate,
    date: updatedDate,
    numberOfMatches,
    id,
  };
};

const getUpdatedSlides = (
  slides: SlideInfo[],
  selectedDate: Date,
  todaySlideIndex: number
) => {
  const oldDate = dayjs(slides[todaySlideIndex].date);
  const newDate = dayjs(selectedDate);

  const dayDifference = newDate.diff(oldDate, "days");
  const numberOfDaysAlreadyExist =
    dayDifference > 0 ? slides.length - 1 - todaySlideIndex : todaySlideIndex;
  const edgeDay = dayjs(
    dayDifference > 0 ? slides[slides.length - 1].date : slides[0].date
  );
  const direction = dayDifference > 0 ? "forward" : "backward";
  const isDirectionForward = direction === "forward";
  const difference = Math.abs(dayDifference) - numberOfDaysAlreadyExist;
  const numberOfDaysToCreate = dayDifference > 0 ? difference + 1 : difference;

  const createdSlides = [];

  for (let i = 1; i <= numberOfDaysToCreate + ADDITIONAL_SLIDES_PER_SIDE; i++) {
    const step = isDirectionForward ? i : -i;
    const createdDate = edgeDay.add(step, "day").toDate();
    const formattedDate = getFormattedDate(createdDate);
    const numberOfMatches = generateRandomMatchesNumber();

    createdSlides.push({
      title: formattedDate,
      date: createdDate,
      numberOfMatches,
      id: nanoid(),
    });
  }

  const updatedSlides = isDirectionForward
    ? [...slides, ...createdSlides]
    : [...createdSlides.reverse(), ...slides];

  const activeIndexOffset = isDirectionForward ? updatedSlides.length - 1 : 0;

  return { slides: updatedSlides, activeIndexOffset };
};

export { getSlides, getNextOrPrevSlide, getUpdatedSlides };
