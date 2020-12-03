import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../model/restaurant.model';
import {OpeningHours, transformDaysInOpeningHours} from "../../utils/open-details.utils";

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  @Input()
  restaurant: Restaurant;

  listDays: any[];
  openingHours: OpeningHours[];

  constructor() {
  }

  ngOnInit(): void {
    this.openingHours = transformDaysInOpeningHours(this.restaurant.openDetails);
  }

}
