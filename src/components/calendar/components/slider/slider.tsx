import { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { getValidClassNames } from "../../../../helpers/get-valid-class-names.helper.ts";
import CaretRightIcon from "../../../../assets/images/icons/caret-right.svg?react";
import { type Swiper as SwiperT } from "swiper/types";
import styles from "./styles.module.scss";

import "swiper/scss";

const sliderArray = [
  "03 Apr",
  "02 Apr",
  "02 Apr",
  "05 Apr",
  "02 Apr",
  "02 Apr",
  "02 Apr",
];

const TODAY_INDEX = 3;

const generateRandomMatchesNumber = () => Math.ceil(Math.random() * 30);

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperT>();

  const handleSlideChangeButtonClick = useCallback(
    (direction: "prev" | "next") => () => {
      if (direction === "prev") {
        swiperInstance?.slidePrev();
      } else {
        swiperInstance?.slideNext();
      }
    },
    [swiperInstance]
  );

  const handleBackTodayButtonClick = useCallback(() => {
    swiperInstance?.slideTo(TODAY_INDEX, 500);
  }, [swiperInstance]);

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
          modules={[Mousewheel]}
          initialSlide={TODAY_INDEX}
          slidesPerView={5}
          centeredSlides
          spaceBetween={16}
          slideToClickedSlide
          mousewheel
          onSwiper={setSwiperInstance}
        >
          {sliderArray.map((item, idx) => (
            <SwiperSlide key={idx}>
              {({ isActive }) => {
                return (
                  <>
                    {isActive && TODAY_INDEX !== idx && (
                      <button
                        className={styles.backTodayButton}
                        onClick={handleBackTodayButtonClick}
                      >
                        Back today
                      </button>
                    )}
                    <div
                      className={getValidClassNames(
                        TODAY_INDEX === idx && isActive && styles.todayCard,
                        isActive && styles.otherDayCard
                      )}
                    >
                      <span>{item}</span>
                      <span
                        className={getValidClassNames(
                          styles.matchesCount,
                          !isActive && styles.hidden
                        )}
                      >
                        {isActive && generateRandomMatchesNumber() + " games"}
                      </span>
                    </div>
                  </>
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
