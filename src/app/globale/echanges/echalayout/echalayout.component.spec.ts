import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchalayoutComponent } from './echalayout.component';

describe('EchalayoutComponent', () => {
  let component: EchalayoutComponent;
  let fixture: ComponentFixture<EchalayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchalayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchalayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
