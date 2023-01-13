import React from "react";
import { RiCalendarTodoFill } from "react-icons/ri";

export default function TxnFilter() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <div
        onClick={() => setOpen(open)}
        className={`
                ${
                  open
                    ? "hover:bg-zinc-100 "
                    : "text-opacity-90 bg-primary-color text-white"
                }
                group  items-center text-base border transition py-3 px-4 rounded-md font-medium relative text-zinc-800 hover:text-opacity-100 focus:outline-none `}
      >
        <RiCalendarTodoFill
          size={25}
          className={`transition ${open ? "text-primary-color" : "text-white"}`}
        />
      </div>
      <div
        className={`fixed bg-gray-50 shadow-l-xl border-l z-40 transition duration-300 w-[320px] h-screen right-0 top-0 ${
          open ? "translate-x-[100%]" : "translate-x-0"
        }`}
      >
        filter
      </div>
    </>
  );
}
