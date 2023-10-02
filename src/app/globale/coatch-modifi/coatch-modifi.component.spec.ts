import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatchModifiComponent } from './coatch-modifi.component';

describe('CoatchModifiComponent', () => {
  let component: CoatchModifiComponent;
  let fixture: ComponentFixture<CoatchModifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoatchModifiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoatchModifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
