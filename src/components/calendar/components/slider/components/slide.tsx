import { getValidClassNames } from "../../../../../helpers/get-valid-class-names.helper.ts";
import { type SlideInfo } from "../types/slide-info.type.ts";
import styles from "./styles.module.scss";

type Props = {
  slideInfo: SlideInfo;
  isActive: boolean;
  isTodaySlide: boolean;
  onClick: () => void;
};

const Slide = ({ slideInfo, isActive, isTodaySlide, onClick }: Props) => {
  return (
    <>
      {isActive && !isTodaySlide && (
        <button className={styles.backTodayButton} onClick={onClick}>
          Back today
        </button>
      )}
      <div
        className={getValidClassNames(
          isTodaySlide && isActive && styles.todayCard,
          isActive && styles.otherDayCard
        )}
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
