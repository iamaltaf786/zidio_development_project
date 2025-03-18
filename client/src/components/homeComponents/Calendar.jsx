// Right-side calendar displaying today’s date

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TaskCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-5 shadow-lg bg-white rounded-lg">
      <h3 className="text-lg font-bold mb-3">March 2021</h3>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default TaskCalendar;
