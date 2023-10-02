import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAnnulerComponent } from './liste-annuler.component';

describe('ListeAnnulerComponent', () => {
  let component: ListeAnnulerComponent;
  let fixture: ComponentFixture<ListeAnnulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAnnulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAnnulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
