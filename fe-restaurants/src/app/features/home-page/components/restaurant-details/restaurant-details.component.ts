import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../model/restaurant.model";

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  @Input()
  restaurant: Restaurant;

  constructor() {
  }

  ngOnInit(): void {
  }

}
