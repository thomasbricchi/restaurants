import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DayOfWeek } from '../features/home-page/model/enum/day-of-week.enum';
import { OpenDetails } from '../features/home-page/model/open-details.model';
import { Restaurant } from '../features/home-page/model/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private resourceUrl = '/api/restaurants';

  constructor(private readonly http: HttpClient) {
  }

  loadAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.resourceUrl);
  }


  getOne(id: number): Observable<Restaurant> {

    return this.http.get<Restaurant>(this.resourceUrl + '/' + id).pipe(
      map(restaurant => {
        return {
          ...restaurant,
          openDetails: transformToMap(restaurant.openDetails)
        };
      })
    );

  }
}


export const transformToMap = (openDetails: any): Map<DayOfWeek, OpenDetails[]> => {
  const returnedMAp = new Map<DayOfWeek, OpenDetails[]>();
  Object.keys(openDetails).forEach(day => {
    const dayOfWeek = day as unknown as DayOfWeek;
    returnedMAp.set(dayOfWeek, openDetails[dayOfWeek]);
  });

  return returnedMAp;
};
