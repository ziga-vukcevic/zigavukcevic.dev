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
});
