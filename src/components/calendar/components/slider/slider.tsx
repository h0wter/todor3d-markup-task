import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import dayjs from "dayjs";
import { Slide } from "./components/slide.tsx";
import { getValidClassNames } from "../../../../helpers/get-valid-class-names.helper.ts";
import CaretRightIcon from "../../../../assets/images/icons/caret-right.svg?react";
import { type Swiper as SwiperT } from "swiper/types";
import { useGetSlides } from "./hooks/use-get-slides.hook.ts";
import styles from "./styles.module.scss";
import "swiper/scss";
import { compareDates } from "./helpers/compare-dates.helper.ts";

const SLIDES_PER_VIEW = 5;
const TODAY_DATE = new Date();

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperT>();

  const [searchParams, setSearchParams] = useSearchParams();

  const dateFromUrl = searchParams.get("date") || TODAY_DATE;

  const {
    slides,
    todaySlideId,
    todaySlideIndex,
    previousDates,
    selectedDateIndex,
  } = useGetSlides(SLIDES_PER_VIEW, dateFromUrl);

  useEffect(() => {
    if (!swiperInstance || swiperInstance.destroyed) {
      return;
    }
    const previousDate = dayjs(
      previousDates.length > 1
        ? previousDates[previousDates.length - 2]
        : previousDates[0]
    );
    const prevDateIdx = slides.findIndex((item) =>
      compareDates(previousDate.toDate(), item.date)
    );

    swiperInstance?.slideTo(prevDateIdx, 0);
    setTimeout(() => swiperInstance.slideTo(selectedDateIndex), 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previousDates, slides, swiperInstance]);

  const setDateSearchParam = useCallback(
    (slideIndex: number) => {
      const date = slides[slideIndex].date;
      const formattedDate = dayjs(date).format("MM-DD-YY");
      if (!compareDates(date, new Date())) {
        setSearchParams({ date: formattedDate });
      } else {
        setSearchParams();
      }
    },
    [setSearchParams, slides]
  );

  const handleSlideChangeButtonClick = useCallback(
    (direction: "prev" | "next") => async () => {
      if (direction === "prev") {
        setDateSearchParam(selectedDateIndex - 1);
      } else {
        setDateSearchParam(selectedDateIndex + 1);
      }
    },
    [selectedDateIndex, setDateSearchParam]
  );

  const handleSlideClick = useCallback(
    (slideIndex: number) => () => {
      setDateSearchParam(slideIndex);
    },
    [setDateSearchParam]
  );

  const handleBackTodayButtonClick = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.sliderWrapper}>
        <button
          className={styles.buttonPrev}
          onClick={handleSlideChangeButtonClick("prev")}
        >
          <CaretRightIcon
            className={getValidClassNames(
              styles.buttonIcon,
              styles.buttonIconPrev
            )}
          />
        </button>
        <Swiper
          initialSlide={todaySlideIndex}
          slidesPerView={SLIDES_PER_VIEW}
          centeredSlides
          spaceBetween={16}
          onSwiper={setSwiperInstance}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => {
                return (
                  <Slide
                    slideInfo={item}
                    isActive={isActive}
                    isTodaySlide={item.id === todaySlideId}
                    onSlideClick={handleSlideClick(index)}
                    onClickBackTodayButtonClick={handleBackTodayButtonClick}
                  />
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={styles.buttonNext}
          onClick={handleSlideChangeButtonClick("next")}
        >
          <CaretRightIcon
            className={getValidClassNames(
              styles.buttonIcon,
              styles.buttonIconNext
            )}
          />
        </button>
      </div>
    </div>
  );
};

export { Slider };
