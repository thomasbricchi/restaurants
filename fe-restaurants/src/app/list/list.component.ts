import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Restaurant} from "../model/restaurant.model";
import {RestaurantService} from "../services/restaurant.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  restaurant$: Observable<Restaurant[]>

  constructor(private restaurantService: RestaurantService) {
    this.restaurant$ = this.restaurantService.loadAll();
  }

  ngOnInit(): void {
  }

}
