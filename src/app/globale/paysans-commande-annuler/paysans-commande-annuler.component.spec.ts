import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysansCommandeAnnulerComponent } from './paysans-commande-annuler.component';

describe('PaysansCommandeAnnulerComponent', () => {
  let component: PaysansCommandeAnnulerComponent;
  let fixture: ComponentFixture<PaysansCommandeAnnulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysansCommandeAnnulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysansCommandeAnnulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
