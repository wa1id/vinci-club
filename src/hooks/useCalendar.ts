import { startOfWeek } from "date-fns";

export default function useCalendar() {
  const firstDayOfWeek = startOfWeek(new Date(), {
    weekStartsOn: 1,
  });

  return { firstDayOfWeek };
}
