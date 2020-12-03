import { Component, OnInit } from '@angular/core';
import { Restaurant } from './model/restaurant.model';
import { RestaurantService } from './services/restaurant.service';
import { EMPTY, Observable } from 'rxjs';

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

  resturantSelected({id}: Restaurant): void {
    if (this.lastRestaurantSelected !== id) {
      this.selectNewRestaurant(id);
    } else {
      this.deselectRestaurant();
    }

  }

  private selectNewRestaurant(id: number): void {
    this.restaurantSelected$ = this.restaurantService.getOne(id);
    this.lastRestaurantSelected = id;
  }

  private deselectRestaurant(): void {
    this.restaurantSelected$ = EMPTY;
    this.lastRestaurantSelected = undefined;
  }
}
