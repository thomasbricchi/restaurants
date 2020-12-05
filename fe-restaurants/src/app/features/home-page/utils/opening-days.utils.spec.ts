import { Day } from '../model/day.model';
import { DayOfWeek } from '../model/enum/day-of-week.enum';
import { TypeEnum } from '../model/enum/type.enum';
import { OpeningDays, transformDaysToOpeningDays } from './opening-days.utils';
import { OpeningHours } from '../model/opening-hours.model';

const openingHours = (start, end): OpeningHours => {
  return {
    start,
    end,
    type: TypeEnum.OPEN
  };
};

describe('transformToOpeningDays', () => {

  it('should manage days with all same openingHours', () => {

    const monday: Day = {dayOfWeek: DayOfWeek.MONDAY, openingHours: [{start: '11:00', end: '14:30', type: TypeEnum.OPEN}]};
    const tuesday: Day = {dayOfWeek: DayOfWeek.TUESDAY, openingHours: [{start: '11:00', end: '14:30', type: TypeEnum.OPEN}]};
    const wednesday: Day = {dayOfWeek: DayOfWeek.WEDNESDAY, openingHours: [{start: '11:00', end: '14:30', type: TypeEnum.OPEN}]};
    const thursday: Day = {dayOfWeek: DayOfWeek.THURSDAY, openingHours: [{start: '11:00', end: '14:30', type: TypeEnum.OPEN}]};


    const response = transformDaysToOpeningDays([monday, tuesday, wednesday, thursday]);

    expect(response).toEqual([
      new OpeningDays(
        DayOfWeek.MONDAY,
        [openingHours('11:00', '14:30')],
        DayOfWeek.THURSDAY)
    ]);

  });

  it('should manage days with different openingHours', () => {

    const monday: Day = {dayOfWeek: DayOfWeek.MONDAY, openingHours: [{start: '11:00', end: '14:30', type: TypeEnum.OPEN}]};
    const tuesday: Day = {dayOfWeek: DayOfWeek.TUESDAY, openingHours: [{start: '12:00', end: '14:30', type: TypeEnum.OPEN}]};
    const wednesday: Day = {dayOfWeek: DayOfWeek.WEDNESDAY, openingHours: [{start: '11:00', end: '13:30', type: TypeEnum.OPEN}]};


    const response = transformDaysToOpeningDays([monday, tuesday, wednesday]);

    expect(response).toEqual([
      new OpeningDays(
        DayOfWeek.MONDAY,
        [openingHours('11:00', '14:30')]),
      new OpeningDays(
        DayOfWeek.TUESDAY,
        [openingHours('12:00', '14:30')]),
      new OpeningDays(
        DayOfWeek.WEDNESDAY,
        [openingHours('11:00', '13:30')]
      ),
    ]);

  });

  it('should manage days mix of cases', () => {

    const monday: Day = {dayOfWeek: DayOfWeek.MONDAY, openingHours: [{start: '11:00', end: '14:30', type: TypeEnum.OPEN}]};
    const tuesday: Day = {dayOfWeek: DayOfWeek.TUESDAY, openingHours: [{start: '11:00', end: '14:30', type: TypeEnum.OPEN}]};
    const wednesday: Day = {dayOfWeek: DayOfWeek.WEDNESDAY, openingHours: [{start: '12:00', end: '14:30', type: TypeEnum.OPEN}]};


    const response = transformDaysToOpeningDays([monday, tuesday, wednesday]);

    expect(response).toEqual([new OpeningDays(
      DayOfWeek.MONDAY,
      [openingHours('11:00', '14:30')],
      DayOfWeek.TUESDAY),
      new OpeningDays(
        DayOfWeek.WEDNESDAY,
        [openingHours('12:00', '14:30')]
      )
    ]);

  });

  it('should manage empty opening Hours', () => {

    const monday: Day = {dayOfWeek: DayOfWeek.MONDAY, openingHours: []};

    const response = transformDaysToOpeningDays([monday]);

    expect(response).toEqual([
      new OpeningDays(
        DayOfWeek.MONDAY,
        [])
    ]);

  });


});
