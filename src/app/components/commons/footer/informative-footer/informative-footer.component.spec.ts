import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeFooterComponent } from './informative-footer.component';

describe('InformativeFooterComponent', () => {
  let component: InformativeFooterComponent;
  let fixture: ComponentFixture<InformativeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformativeFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
