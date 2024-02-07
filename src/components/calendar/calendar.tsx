import { Slider } from "./components/slider/slider.tsx";
import { DatePicker } from "./components/date-picker/date-picker.tsx";
import styles from "./styles.module.scss";

const Calendar = () => {
  return (
    <div className={styles.calendarContainer}>
      <Slider />
      <DatePicker />
    </div>
  );
};

export { Calendar };
