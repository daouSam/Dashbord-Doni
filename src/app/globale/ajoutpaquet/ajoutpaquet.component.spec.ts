import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpaquetComponent } from './ajoutpaquet.component';

describe('AjoutpaquetComponent', () => {
  let component: AjoutpaquetComponent;
  let fixture: ComponentFixture<AjoutpaquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutpaquetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutpaquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
