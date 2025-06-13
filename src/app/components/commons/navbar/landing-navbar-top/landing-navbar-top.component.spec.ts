import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavbarTopComponent } from './landing-navbar-top.component';

describe('LandingNavbarTopComponent', () => {
  let component: LandingNavbarTopComponent;
  let fixture: ComponentFixture<LandingNavbarTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingNavbarTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNavbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
