import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from '../../model/restaurant.model';
import { OpeningDays, transformDaysToOpeningDays } from '../../utils/opening-days.utils';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  @Input()
  restaurant: Restaurant;
  @Output()
  xClicked = new EventEmitter<void>();
  openingHours: OpeningDays[];

  constructor() {
  }

  ngOnInit(): void {
    this.openingHours = transformDaysToOpeningDays(this.restaurant.openDetails);
  }

}
