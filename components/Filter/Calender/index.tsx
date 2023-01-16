import { useAtom } from "jotai";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { calendar } from "../../../base";

export function CalenderFilter() {
  const [calendarValue, setCalendarValue] = useAtom(calendar);
  
  return (
    <div>
      <Calendar onChange={setCalendarValue} value={calendarValue} />
    </div>
  );
}
