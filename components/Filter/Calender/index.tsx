import { useAtom } from "jotai";
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
