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

  it('should contain 1 cup of coffee if current local hour is 8', () => {
    component.calculateCupsDrank(8);
    fixture.detectChanges();
    const { nativeElement } = fixture.debugElement;
    expect(nativeElement.querySelector('.js-unit-test').innerText).toBe(String(1));
  });

  it('should contain 2 cups of coffee if current local hour is 11', () => {
    component.calculateCupsDrank(11);
    fixture.detectChanges();
    const { nativeElement } = fixture.debugElement;
    expect(nativeElement.querySelector('.js-unit-test').innerText).toBe(String(2));
  });

  it('should contain 3 cups of coffee if current local hour is 16', () => {
    component.calculateCupsDrank(16);
    fixture.detectChanges();
    const { nativeElement } = fixture.debugElement;
    expect(nativeElement.querySelector('.js-unit-test').innerText).toBe(String(3));
  });

  // TODO
  //  - not showing stats
  //  - cover more cases
});
