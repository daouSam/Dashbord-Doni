import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiProduitComponent } from './modifi-produit.component';

describe('ModifiProduitComponent', () => {
  let component: ModifiProduitComponent;
  let fixture: ComponentFixture<ModifiProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
