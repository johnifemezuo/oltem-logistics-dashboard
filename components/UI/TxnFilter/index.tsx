import React, { useEffect } from "react";
import { RiCalendarTodoFill } from "react-icons/ri";
import "react-calendar/dist/Calendar.css";
import { CalenderFilter } from "../../Filter/Calender";

export default function TxnFilter() {
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    setOpen(false);
  }, [])
  return (
    <>
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
        <div className="absolute right-12 bottom-12 z-20 ">
          <CalenderFilter />
        </div>
      ) : null}
    </>
  );
}
