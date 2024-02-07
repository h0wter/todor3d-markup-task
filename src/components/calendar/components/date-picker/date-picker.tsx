import { useCallback, useState } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
import CaretRightIcon from "../../../../assets/images/icons/caret-right.svg?react";
import CalendarIcon from "../../../../assets/images/icons/calendar.svg?react";
import { getFormatterMonthYear } from "./helpers/get-formatted-month-year.helper.ts";
import { getValidClassNames } from "../../../../helpers/get-valid-class-names.helper.ts";
import { type DateValue } from "../../types/date-value.type.ts";
import styles from "./styles.module.scss";
import { compareDates } from "../slider/helpers/compare-dates.helper.ts";

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
    (dateValue: DateValue) => {
      const date = Array.isArray(dateValue) ? dateValue[0] : dateValue;

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
          <Calendar
            value={decodedDate}
            locale="en-US"
            calendarType="iso8601"
            minDetail="decade"
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
            formatMonthYear={getFormatterMonthYear}
            onChange={handleDataChange}
          />
        </div>
      )}
    </>
  );
};

export { DatePicker };
