import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../model/restaurant.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input()
  restaurants: Restaurant[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
