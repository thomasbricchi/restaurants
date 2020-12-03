import { Day } from './day.model';


export interface Restaurant {
  id: number;
  name: string;
  address: string;
  cuisineType: string;
  latitude?: number;
  longitude?: number;
  openDetails?: Day[];
}
