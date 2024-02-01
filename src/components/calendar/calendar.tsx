import { useState } from "react";
import { Slider } from "./components/slider/slider.tsx";
import { DatePicker } from "./components/date-picker/date-picker.tsx";
import { type DateValue } from "./types/date-value.type.ts";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<DateValue>(new Date());

  return (
    <>
      <Slider />
      <DatePicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </>
  );
};

export { Calendar };
