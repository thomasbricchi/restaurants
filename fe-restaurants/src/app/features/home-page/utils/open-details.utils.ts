import {Day, OpenDetails} from '../model/open-details.model';

export const transformDaysInOpeningHours =
  (days: Day[]): OpeningHours[] => {

    return days
      .reduce((acc: OpeningHours[], value: Day) => {

        if (acc.length === 0) {
          acc = [new OpeningHours(value.dayOfWeek.toString(), value.openDetails)];
        } else {

          const lastOpening = acc[acc.length - 1];
          if (JSON.stringify(lastOpening.openingDetails) === JSON.stringify(value.openDetails)) {
            lastOpening.to = value.dayOfWeek.toString();
          } else {
            acc = [...acc, new OpeningHours(value.dayOfWeek.toString(), value.openDetails)];
          }
        }
        return acc;
      }, []);
  };

export class OpeningHours {

  from: string;
  to?: string;
  openingDetails: OpenDetails[];


  constructor(from: string, openingDetails: OpenDetails[]) {
    this.from = from;
    this.openingDetails = openingDetails;
  }

  get label(): string {
    return this.from + this.to ? ' - ' + this.to : null;
  }


}
