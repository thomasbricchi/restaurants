import { Situation } from './enum/type.enum';
import { DayOfWeek } from './enum/day-of-week.enum';

export interface Day {
  dayOfWeek: DayOfWeek;
  openDetails: OpenDetails[];

}

export interface OpenDetails {
  open: string;
  close: string;
  type: Situation;
}
