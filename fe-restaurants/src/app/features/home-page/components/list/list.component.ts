import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Restaurant} from '../../model/restaurant.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  restaurants: Restaurant[];

  @Output()
  restaurantClicked = new EventEmitter<Restaurant>();


}
