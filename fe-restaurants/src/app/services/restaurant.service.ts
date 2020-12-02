import {Injectable} from '@angular/core';
import {Restaurant} from "../model/restaurant.model";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private resourceUrl = '/api/restaurants';

  constructor(private readonly http: HttpClient) {
  }

  loadAll(): Observable<Restaurant[]> {
    return of([{
        id: 1,
        name: '',
        where: '',
      },
      {
        id: 1,
        name: '',
        where: '',
      },
      {
        id: 1,
        name: '',
        where: '',
      }])
   // return this.http.get<Restaurant[]>(this.resourceUrl);
  }
}
