import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCerealeComponent } from './list-cereale.component';

describe('ListCerealeComponent', () => {
  let component: ListCerealeComponent;
  let fixture: ComponentFixture<ListCerealeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCerealeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCerealeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
