import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpaquetComponent } from './listpaquet.component';

describe('ListpaquetComponent', () => {
  let component: ListpaquetComponent;
  let fixture: ComponentFixture<ListpaquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpaquetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpaquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
