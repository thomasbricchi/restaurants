import { DayOfWeek } from './enum/day-of-week.enum';
import { Day, OpenDetails } from './open-details.model';


export interface Restaurant {
  id: number;
  name: string;
  address: string;
  cuisineType: string;
  latitude?: number;
  longitude?: number;
  openDetails?: Day[];
}
