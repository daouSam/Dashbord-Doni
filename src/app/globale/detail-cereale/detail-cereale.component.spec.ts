import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCerealeComponent } from './detail-cereale.component';

describe('DetailCerealeComponent', () => {
  let component: DetailCerealeComponent;
  let fixture: ComponentFixture<DetailCerealeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCerealeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCerealeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
