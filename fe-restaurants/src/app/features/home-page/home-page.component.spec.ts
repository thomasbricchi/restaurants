import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { createRestaurant, createRestaurantWithDetails, TestUtils } from '../../../test-utils/test-utils';
import { RestaurantService } from './services/restaurant.service';
import SpyObj = jasmine.SpyObj;
import { of } from 'rxjs';
import { MockComponents } from 'ng-mocks';
import { ListComponent } from './components/list/list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let testUtils: TestUtils<HomePageComponent>;
  let restaurantService: SpyObj<RestaurantService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent, MockComponents(ListComponent, RestaurantDetailsComponent)],
      providers: [{provide: RestaurantService, useValue: jasmine.createSpyObj<RestaurantService>(['loadAll', 'getOne'])}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    testUtils = new TestUtils<HomePageComponent>(fixture);
    restaurantService = TestBed.inject(RestaurantService) as SpyObj<RestaurantService>;

  });


  it('should pass restaurants to list', () => {
    restaurantService.loadAll.and.returnValue(of([createRestaurant()]));

    fixture.detectChanges();
    const listComp = testUtils.getComponentInstanceByDirective<ListComponent>(ListComponent);

    expect(listComp.restaurants).toEqual([createRestaurant()]);
    testUtils.verifyElementDoesntExistByDirective(RestaurantDetailsComponent);

  });

  it('should manage restaurantClicked by list', () => {
    // GIVEN
    fixture.detectChanges();
    const listComp = testUtils.getComponentInstanceByDirective<ListComponent>(ListComponent);

    restaurantService.getOne.and.returnValue(of(createRestaurantWithDetails()));

    // WHEN
    listComp.restaurantClicked.emit(createRestaurant());
    fixture.detectChanges();

    // THEN
    const restaurantDetailsC = testUtils.getComponentInstanceByDirective<RestaurantDetailsComponent>(RestaurantDetailsComponent);

    expect(restaurantDetailsC.restaurant).toEqual(createRestaurantWithDetails());
    expect(component.lastRestaurantSelected).toEqual(createRestaurant().id);
  });

  it('should clean and close details when repeat the click to a selected restaurant', () => {
    // GIVEN
    component.restaurantSelected$ = of(createRestaurantWithDetails());
    component.lastRestaurantSelected = 1;
    fixture.detectChanges();
    const listComp = testUtils.getComponentInstanceByDirective<ListComponent>(ListComponent);


    // WHEN
    listComp.restaurantClicked.emit(createRestaurant());
    fixture.detectChanges();

    // THEN
    testUtils.verifyElementDoesntExistByDirective(RestaurantDetailsComponent);
    expect(component.lastRestaurantSelected).toEqual(undefined);
  });

})
;
