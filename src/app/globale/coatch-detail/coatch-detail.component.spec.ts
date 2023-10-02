import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatchDetailComponent } from './coatch-detail.component';

describe('CoatchDetailComponent', () => {
  let component: CoatchDetailComponent;
  let fixture: ComponentFixture<CoatchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoatchDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoatchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
