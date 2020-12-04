import { Day } from '../model/day.model';
import { DayOfWeek } from '../model/enum/day-of-week.enum';

export const toDay = (openDetails: any): Day[] => {
  let returnedOpen = [];
  Object.keys(openDetails).forEach(day => {
    const dayOfWeek = day as unknown as DayOfWeek;
    returnedOpen = [...returnedOpen, {dayOfWeek, openingHours: openDetails[dayOfWeek]}];
  });
  return returnedOpen;
};
