import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../features/home-page/model/restaurant.model';

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
}
