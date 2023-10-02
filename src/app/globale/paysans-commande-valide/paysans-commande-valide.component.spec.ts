import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysansCommandeValideComponent } from './paysans-commande-valide.component';

describe('PaysansCommandeValideComponent', () => {
  let component: PaysansCommandeValideComponent;
  let fixture: ComponentFixture<PaysansCommandeValideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysansCommandeValideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysansCommandeValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
