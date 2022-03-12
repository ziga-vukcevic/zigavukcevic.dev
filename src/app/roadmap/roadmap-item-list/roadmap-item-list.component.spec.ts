import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoadmapItemListComponent } from './roadmap-item-list.component';

describe('RoadmapItemListComponent', () => {
  let component: RoadmapItemListComponent;
  let fixture: ComponentFixture<RoadmapItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapItemListComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
