import { getValidClassNames } from "../../../../../helpers/get-valid-class-names.helper.ts";
import { type SlideInfo } from "../types/slide-info.type.ts";
import styles from "./styles.module.scss";

type Props = {
  slideInfo: SlideInfo;
  isActive: boolean;
  isTodaySlide: boolean;
  onSlideClick: () => void;
  onClickBackTodayButtonClick: () => void;
};

const Slide = ({
  slideInfo,
  isActive,
  isTodaySlide,
  onSlideClick,
  onClickBackTodayButtonClick,
}: Props) => {
  return (
    <>
      {isActive && !isTodaySlide && (
        <button
          className={styles.backTodayButton}
          onClick={onClickBackTodayButtonClick}
        >
          Back today
        </button>
      )}
      <div
        className={getValidClassNames(
          isTodaySlide && isActive && styles.todayCard,
          isActive && styles.otherDayCard
        )}
        onClick={onSlideClick}
      >
        <span>{slideInfo.title}</span>
        <span
          className={getValidClassNames(
            styles.matchesCount,
            !isActive && styles.hidden
          )}
        >
          {isActive && slideInfo.numberOfMatches + " games"}
        </span>
      </div>
    </>
  );
};

export { Slide };
