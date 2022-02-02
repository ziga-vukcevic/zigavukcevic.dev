import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatListComponent } from './stat-list.component';

describe('StatsComponent', () => {
  let component: StatListComponent;
  let fixture: ComponentFixture<StatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatListComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  const occurrenceList = [
    // TODO: { numberOfCups: 0, currentLocalHourList: [0, 1, 2, 3, 4, 5, 6, 7] },
    { numberOfCups: 1, currentLocalHourList: [8, 10] },
    { numberOfCups: 2, currentLocalHourList: [11, 12, 13, 14, 15] },
    { numberOfCups: 3, currentLocalHourList: [16, 17, 18, 19, 20, 21, 22, 23] },
  ];

  occurrenceList.forEach((occurrence) => {
    occurrence.currentLocalHourList.forEach((currentLocalHour) => {
      it(`
        should contain ${occurrence.numberOfCups}
        ${occurrence.numberOfCups > 1 ? 'cups' : 'cup'}
        of coffee if current local hour is ${currentLocalHour}
      `, () => {
        component.calculateCupsDrank(currentLocalHour);
        fixture.detectChanges();
        const { nativeElement } = fixture.debugElement;
        expect(nativeElement.querySelector('.js-unit-test').innerText)
          .toBe(String(occurrence.numberOfCups));
      });
    });
  });
});
