import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Restaurant} from "../../model/restaurant.model";

@Component({
  selector: 'app-card-restaurant',
  templateUrl: './card-restaurant.component.html',
  styleUrls: ['./card-restaurant.component.css']
})
export class CardRestaurantComponent {

  @Input()
  restaurant: Restaurant;

  @Output()
  restaurantClicked = new EventEmitter<Restaurant>();

}
