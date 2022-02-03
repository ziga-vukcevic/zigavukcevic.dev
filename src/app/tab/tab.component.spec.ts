import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabComponent } from './tab.component';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance ;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should be hidden by default', () => {
    const { nativeElement } = fixture.debugElement;
    expect(nativeElement.querySelector('.js-unit-test-container')
      .hasAttribute('hidden')).toBeTrue();
  });

  it('should be visible if set to active', () => {
    component.isActive = true;
    fixture.detectChanges();
    const { nativeElement } = fixture.debugElement;
    expect(nativeElement.querySelector('.js-unit-test-container')
      .hasAttribute('hidden')).toBeFalse();
  });
});
