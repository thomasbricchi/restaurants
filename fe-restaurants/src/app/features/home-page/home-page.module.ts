import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ListComponent } from './components/list/list.component';
import { CardRestaurantComponent } from './components/card-restaurant/card-restaurant.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomePageComponent,
    ListComponent,
    CardRestaurantComponent,
    RestaurantDetailsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ], exports: [HomePageComponent]
})
export class HomePageModule {
}
