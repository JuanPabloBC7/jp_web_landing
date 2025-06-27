import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsNToolsComponent } from './skills-n-tools.component';

describe('SkillsNToolsComponent', () => {
  let component: SkillsNToolsComponent;
  let fixture: ComponentFixture<SkillsNToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsNToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsNToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
