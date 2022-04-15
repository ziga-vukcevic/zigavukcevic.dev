import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightSkillComponent } from './highlight-skill.component';

describe('HighlightSkillComponent', () => {
  let component: HighlightSkillComponent;
  let fixture: ComponentFixture<HighlightSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightSkillComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
