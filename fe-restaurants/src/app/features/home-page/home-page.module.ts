import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ListComponent } from './components/list/list.component';
import { CardRestaurantComponent } from './components/card-restaurant/card-restaurant.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ListComponent,
    CardRestaurantComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ], exports: [HomePageComponent]
})
export class HomePageModule {
}
