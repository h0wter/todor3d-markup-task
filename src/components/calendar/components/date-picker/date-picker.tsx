import { useCallback, useState } from "react";
import dayjs from "dayjs";
import Picker from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import { useSearchParams } from "react-router-dom";
import CaretRightIcon from "../../../../assets/images/icons/caret-right.svg?react";
import CalendarIcon from "../../../../assets/images/icons/calendar.svg?react";
import { getValidClassNames } from "../../../../helpers/get-valid-class-names.helper.ts";
import { compareDates } from "../slider/helpers/compare-dates.helper.ts";
import styles from "./styles.module.scss";

const DatePicker = () => {
  const [isDatePickedOpened, setIsDatePickedOpened] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const dateFromUrl = searchParams.get("date") || new Date();
  const decodedDate = dayjs(dateFromUrl).toDate();

  const handleDatePickerToggle = useCallback(
    () => setIsDatePickedOpened((prevState) => !prevState),
    []
  );

  const handleDataChange = useCallback(
    (date: Date) => {
      const formattedDate = dayjs(date).format("MM-DD-YY");

      if (date && !compareDates(date, new Date())) {
        setSearchParams({ date: formattedDate });
      } else {
        setSearchParams();
      }
    },
    [setSearchParams]
  );

  return (
    <>
      <button
        className={styles.datePickerButton}
        onClick={handleDatePickerToggle}
      >
        <div className={styles.buttonLabelWrapper}>
          <CalendarIcon />
          <span>View Calendar</span>
        </div>
        <CaretRightIcon
          className={getValidClassNames(
            isDatePickedOpened && styles.buttonActive
          )}
        />
      </button>
      {isDatePickedOpened && (
        <div className={styles.calendarContainer}>
          <Picker
            inline
            selected={decodedDate}
            useWeekdaysShort
            locale={enGB}
            onChange={handleDataChange}
          />
        </div>
      )}
    </>
  );
};

export { DatePicker };
