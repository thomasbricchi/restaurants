import { DayOfWeek } from './enum/day-of-week.enum';
import { OpenDetails } from './open-details.model';



export interface Restaurant {
  id: number;
  name: string;
  where: string;
  latitude?: number;
  longitude?: number;
  openDetails?: Map<DayOfWeek, [OpenDetails]>;
}
