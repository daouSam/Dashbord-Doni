import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatchComponent } from './coatch.component';

describe('CoatchComponent', () => {
  let component: CoatchComponent;
  let fixture: ComponentFixture<CoatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
