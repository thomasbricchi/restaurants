import { Day } from '../model/day.model';
import { DayOfWeek } from '../model/enum/day-of-week.enum';
import { OpeningHours } from '../model/opening-hours.model';

export const transformDaysToOpeningDays = (days: Day[]): OpeningDays[] => {

    return days
      .reduce((openingDays: OpeningDays[], day: Day) => {
        if (isEmpty(openingDays)) {
          return [new OpeningDays(day.dayOfWeek, day.openingHours)];
        }
        const lastOpeningDay = takeLatestOpeningDays(openingDays);
        if (isEquals(lastOpeningDay.openingHours, day.openingHours)) {
          lastOpeningDay.to = day.dayOfWeek;
          return openingDays;
        }
        return [...openingDays, new OpeningDays(day.dayOfWeek, day.openingHours)];
      }, []);
  }
;

const isEmpty = (arr: any[]): boolean => arr.length === 0;
const isEquals = (obj1: any, obj2: any) => JSON.stringify(obj1) === JSON.stringify(obj2);
const takeLatestOpeningDays = (openingDays: OpeningDays[]) => openingDays[openingDays.length - 1];

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

