import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Restaurant } from '../app/features/home-page/model/restaurant.model';
import { DayOfWeek } from '../app/features/home-page/model/enum/day-of-week.enum';

export class TestUtils<T> {
  constructor(private fixture: ComponentFixture<T>) {
  }

  // tslint:disable-next-line:no-shadowed-variable
  getComponentInstanceByDirective<T>(type): T {
    return this.fixture.debugElement.query(By.directive(type))
      .componentInstance as T;
  }

  // tslint:disable-next-line:no-shadowed-variable
  getNativeElementByDirective<T>(type) {
    return this.fixture.debugElement.query(By.directive(type));
  }

  // tslint:disable-next-line:no-shadowed-variable
  getComponentsInstancesByDirective<T>(type): T[] {
    return this.fixture.debugElement
      .queryAll(By.directive(type))
      .map((element) => element.componentInstance) as T[];
  }

  clickThisBySelector(classe: string) {
    const enabledButton = this.fixture.debugElement.query(By.css(classe))
      .nativeElement;
    enabledButton.dispatchEvent(new Event('click'));
  }

  getNativeElementBySelector(selector: string) {
    return this.fixture.debugElement.query(By.css(selector)).nativeElement;
  }

  verifyElementDoesntExistBySelector(selector: string) {
    // @ts-ignore
    expect(this.fixture.debugElement.query(By.css(selector))).toBeNull(
      'ElementExist'
    );
  }

  verifyElementExistBySelector(selector: string) {
    // @ts-ignore
    expect(this.fixture.debugElement.query(By.css(selector))).toBeDefined(
      'Element Not Exist'
    );
  }

  verifyElementDoesntExistByDirective(type) {
    // @ts-ignore
    expect(this.fixture.debugElement.query(By.directive(type))).toBeNull(
      'ElementExist'
    );
  }

  verifyElementExistByDirective(type) {
    // @ts-ignore
    expect(this.fixture.debugElement.query(By.directive(type))).toBeDefined(
      'Element Not Exist'
    );
  }
}

export const voidObservable: Observable<void> = new Observable((subscriber) => {
  subscriber.next();
  subscriber.complete();
});


export const createRestaurant =
  (): Restaurant => {
    return {
      id: 1,
      name: 'name',
      address: 'address',
      cuisineType: 'cuisineType',
    } as Restaurant;
  };

export const createRestaurantWithDetails =
  (): Restaurant => {
    return {
      ...createRestaurant(),
      openDetails: [{dayOfWeek: DayOfWeek.MONDAY, openingHours: []}]
    };
  };
