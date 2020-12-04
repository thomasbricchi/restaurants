import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { toDay } from '../utils/to-day.utils';

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
          openDetails: toDay(restaurant.openDetails)
        };
      })
    );

  }
}


