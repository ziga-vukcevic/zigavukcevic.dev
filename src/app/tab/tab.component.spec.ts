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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  // TODO: what about the title?
  //
  // it('title test', () => {
  //   component.title = 'Ziga';
  //   fixture.detectChanges();

  //   expect(component.title).toBeTruthy();
  // });

  it("shouldn't show content by default", () => {
    const { nativeElement } = fixture.debugElement;
    expect(nativeElement.querySelector('.js-unit-test').hasAttribute('hidden')).toBe(true);
  });

  it('should show content if set to active', () => {
    component.isActive = true;
    fixture.detectChanges();
    const { nativeElement } = fixture.debugElement;
    expect(nativeElement.querySelector('.js-unit-test').hasAttribute('hidden')).toBe(false);
  });
});
