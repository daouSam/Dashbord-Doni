import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiepaquetComponent } from './modifiepaquet.component';

describe('ModifiepaquetComponent', () => {
  let component: ModifiepaquetComponent;
  let fixture: ComponentFixture<ModifiepaquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiepaquetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiepaquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
