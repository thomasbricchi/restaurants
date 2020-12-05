import { DayOfWeek } from './enum/day-of-week.enum';
import { OpeningHours } from './opening-hours.model';

export interface Day {
  dayOfWeek: DayOfWeek;
  openingHours: OpeningHours[];

}
