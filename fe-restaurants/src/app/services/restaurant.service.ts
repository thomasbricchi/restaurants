import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DayOfWeek } from '../features/home-page/model/enum/day-of-week.enum';
import { OpenDetails } from '../features/home-page/model/open-details.model';
import { Situation } from '../features/home-page/model/enum/type.enum';

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
    let openDetails = new Map<DayOfWeek, OpenDetails[]>();
    openDetails.set(DayOfWeek.MONDAY, [{
      open: '11:30',
      close: '14:30',
      type: Situation.OPEN
    }, {
      open: '11:30',
      close: '14:30',
      type: Situation.CLOSE
    }]);
    return of({
      id: 1,
      name: 'Pizza mania',
      address: 'Viale Lecco, 1',
      cuisineType: 'italian',
      openDetails
    });

  }
}
