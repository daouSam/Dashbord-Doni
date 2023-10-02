import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiCerealeComponent } from './modifi-cereale.component';

describe('ModifiCerealeComponent', () => {
  let component: ModifiCerealeComponent;
  let fixture: ComponentFixture<ModifiCerealeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiCerealeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiCerealeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
