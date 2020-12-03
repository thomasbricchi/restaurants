import { Day } from '../model/day.model';
import { DayOfWeek } from '../model/enum/day-of-week.enum';
import { OpeningHours } from '../model/opening-hours.model';

export const transformDaysToOpeningDays = (days: Day[]): OpeningDays[] => {

  return days
    .reduce((acc: OpeningDays[], value: Day) => {
      if (acc.length === 0) {
        acc = [new OpeningDays(value.dayOfWeek, value.openingHours)];
      } else {
        const lastOpening = acc[acc.length - 1];
        if (JSON.stringify(lastOpening.openingHours) === JSON.stringify(value.openingHours)) {
          lastOpening.to = value.dayOfWeek;
        } else {
          acc = [...acc, new OpeningDays(value.dayOfWeek, value.openingHours)];
        }
      }
      return acc;
    }, []);
};

export class OpeningDays {

  from: DayOfWeek;
  to?: DayOfWeek;
  openingHours: OpeningHours[];


  constructor(from: DayOfWeek, openingDetails: OpeningHours[], to?: DayOfWeek) {
    this.from = from;
    this.to = to;
    this.openingHours = openingDetails;
  }


  get label(): string {
    return this.from + (this.to ? ' - ' + this.to : '');
  }
}

