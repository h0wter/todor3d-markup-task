import Calendar from "react-calendar";
import { getFormatterMonthYear } from "./helpers/get-formatted-month-year.helper.ts";
import { DateValue } from "../../types/date-value.type.ts";
import styles from "./styles.module.scss";

type Props = {
  selectedDate: DateValue;
  setSelectedDate: React.Dispatch<React.SetStateAction<DateValue>>;
};

const DatePicker = ({ selectedDate, setSelectedDate }: Props) => {
  return (
    <div className={styles.calendarContainer}>
      <Calendar
        value={selectedDate}
        locale="en-US"
        calendarType="iso8601"
        minDetail="decade"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        formatMonthYear={getFormatterMonthYear}
        onChange={setSelectedDate}
      />
    </div>
  );
};

export { DatePicker };
