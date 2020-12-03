import {Component, OnInit} from '@angular/core';
import {Restaurant} from './model/restaurant.model';
import {RestaurantService} from '../../services/restaurant.service';
import {EMPTY, Observable} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  lastRestaurantSelected: number;
  restaurantSelected$: Observable<Restaurant>;
  restaurants$: Observable<Restaurant[]>;

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.restaurants$ = this.restaurantService.loadAll();
  }

  selectRestaurant(restaurantSelected: Restaurant) {
    if (this.lastRestaurantSelected !== restaurantSelected.id) {
      this.restaurantSelected$ = this.restaurantService.getOne(restaurantSelected.id);
      this.lastRestaurantSelected = restaurantSelected.id;
    } else {
      this.restaurantSelected$ = EMPTY;
      this.lastRestaurantSelected = null;
    }

  }

}
