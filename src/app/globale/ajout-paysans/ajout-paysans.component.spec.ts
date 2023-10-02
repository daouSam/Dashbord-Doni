import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPaysansComponent } from './ajout-paysans.component';

describe('AjoutPaysansComponent', () => {
  let component: AjoutPaysansComponent;
  let fixture: ComponentFixture<AjoutPaysansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPaysansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPaysansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
