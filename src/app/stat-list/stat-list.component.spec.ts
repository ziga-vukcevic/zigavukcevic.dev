import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatListComponent } from './stat-list.component';
import * as dayjs from 'dayjs';

describe('StatsComponent', () => {
  let component: StatListComponent;
  let fixture: ComponentFixture<StatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  const endFutureDate = '2032-07-01';
  const endFutureDateParsed = dayjs(endFutureDate).format('D MMMM YYYY');

  it(`should contain 25+ years in the web industry if today's date would be ${endFutureDateParsed}`, () => {
    component.periodWeb = component.calculatePeriod(
      '2007-06-01',
      endFutureDate,
    );
    fixture.detectChanges();
    const { nativeElement } = fixture.debugElement;

    expect(
      nativeElement.querySelector('.js-unit-test-period-web').innerText,
    ).toBe('25+');
  });

  it(`should contain 20+ years of active programming if today's date would be ${endFutureDateParsed}`, () => {
    component.periodProgramming = component.calculatePeriod(
      '2012-01-01',
      endFutureDate,
    );
    fixture.detectChanges();
    const { nativeElement } = fixture.debugElement;

    expect(
      nativeElement.querySelector('.js-unit-test-period-programming').innerText,
    ).toBe('20+');
  });

  // TODO: singular, plural test

  const occurrenceList = [
    { numberOfCups: 0, localHourList: [0, 1, 2, 3, 4, 5, 6, 7] },
    { numberOfCups: 1, localHourList: [8, 9, 10] },
    { numberOfCups: 2, localHourList: [11, 12, 13, 14, 15] },
    { numberOfCups: 3, localHourList: [16, 17, 18, 19, 20, 21, 22, 23] },
  ];

  occurrenceList.forEach((occurrence, occurrenceIndex) => {
    occurrence.localHourList.forEach(localHour => {
      // Occurrence with number of cups of 0
      if (occurrenceIndex === 0) {
        it(`should be hidden if current local hour is ${localHour}`, () => {
          component.calculateCupsDrank(localHour);
          fixture.detectChanges();
          const { nativeElement } = fixture.debugElement;

          expect(
            nativeElement
              .querySelector('.js-unit-test-container')
              .hasAttribute('hidden'),
          ).toBeTrue();
        });
        // Occurrences with number of cups of 1, 2 or 3
      } else {
        it(`should contain ${occurrence.numberOfCups}
          ${occurrence.numberOfCups > 1 ? 'cups' : 'cup'}
          of coffee if current local hour is ${localHour}`, () => {
          component.calculateCupsDrank(localHour);
          fixture.detectChanges();
          const { nativeElement } = fixture.debugElement;

          expect(
            nativeElement.querySelector(
              '.js-unit-test-container .js-unit-test-number-of-cups',
            ).innerText,
          ).toBe(String(occurrence.numberOfCups));
        });
      }
    });
  });
});
