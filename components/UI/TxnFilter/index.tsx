import React from "react";
import "react-calendar/dist/Calendar.css";
import { RiCalendarTodoFill } from "react-icons/ri";
import { CalenderFilter } from "../../Filter/Calender";

export default function TxnFilter({ calendarValue }: { calendarValue: any }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className={`
                hover:bg-zinc-100
                group  items-center text-base border transition py-3 px-4 rounded-md font-medium relative text-zinc-800 hovpacity-100 focus:outline-none `}
      >
        <RiCalendarTodoFill
          size={25}
          className={`transition "text-primary-color`}
        />
      </div>

      {open ? (
        <div className="absolute right-16 top-0  z-20 ">
          <CalenderFilter />
        </div>
      ) : null}
    </div>
  );
}
