import {Day, OpenDetails} from '../model/open-details.model';
import {DayOfWeek} from "../model/enum/day-of-week.enum";

export const transformDaysInOpeningHours =
  (days: Day[]): OpeningHours[] => {

    return days
      .reduce((acc: OpeningHours[], value: Day) => {
        if (acc.length === 0) {
          acc = [new OpeningHours(value.dayOfWeek, value.openDetails)];
        } else {
          const lastOpening = acc[acc.length - 1];
          if (JSON.stringify(lastOpening.openingDetails) === JSON.stringify(value.openDetails)) {
            lastOpening.to = value.dayOfWeek;
          } else {
            acc = [...acc, new OpeningHours(value.dayOfWeek, value.openDetails)];
          }
        }
        return acc;
      }, []);
  };

export class OpeningHours {

  from: DayOfWeek;
  to?: DayOfWeek;
  openingDetails: OpenDetails[];


  constructor(from: DayOfWeek, openingDetails: OpenDetails[]) {
    this.from = from;
    this.openingDetails = openingDetails;
  }

  get label(): string {
    return this.from + (this.to ? ' - ' + this.to : '');
  }
}

