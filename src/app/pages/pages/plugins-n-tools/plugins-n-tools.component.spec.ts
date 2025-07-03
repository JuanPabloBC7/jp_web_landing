import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginsNToolsComponent } from './plugins-n-tools.component';

describe('PluginsNToolsComponent', () => {
  let component: PluginsNToolsComponent;
  let fixture: ComponentFixture<PluginsNToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PluginsNToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginsNToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
