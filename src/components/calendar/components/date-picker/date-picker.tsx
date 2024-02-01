import { useState } from "react";
import Calendar from "react-nice-calendar";
import { getValidClassNames } from "../../../../helpers/get-valid-class-names.helper.ts";
import styles from "./styles.module.scss";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | Date[] | null>();
  console.log(selectedDate);
  return (
    <Calendar
      startDate={new Date()}
      selectedDate={selectedDate}
      daysDictionary={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Say"]}
      onChangeSelectedDate={setSelectedDate}
      classNames={{
        Container: styles.calendarContainer,
        Header: styles.header,
        HeaderText: styles.headerText,
        PrevButton: styles.button,
        NextButton: getValidClassNames(styles.button, styles.nextButton),
        Days: styles.days,
        Day: styles.day,
        DayCell: styles.dayCell,
        Cells: styles.cells,
        CurrentDay: styles.test,
        SelectedDate: styles.selectedDay,
        DayBelongCurrentMonth: styles.currentMothDay,
        // DayBelongCurrentMonth: styles.test,
      }}
    />
  );
};

export { DatePicker };
