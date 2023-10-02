import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpaquetComponent } from './detailpaquet.component';

describe('DetailpaquetComponent', () => {
  let component: DetailpaquetComponent;
  let fixture: ComponentFixture<DetailpaquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpaquetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpaquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
