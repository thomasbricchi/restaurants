import {Component, OnInit} from '@angular/core';
import {Restaurant} from "./model/restaurant.model";
import {RestaurantService} from "../../services/restaurant.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    this.restaurants$ = this.restaurantService.loadAll();
  }

  restaurantSelected$: Observable<Restaurant>;
  restaurants$: Observable<Restaurant[]>;

  constructor(private restaurantService: RestaurantService) {
  }


  selectRestaurant(restaurantSelected: Restaurant) {
    this.restaurantSelected$ = this.restaurantService.getOne(restaurantSelected.id);
  }

}
