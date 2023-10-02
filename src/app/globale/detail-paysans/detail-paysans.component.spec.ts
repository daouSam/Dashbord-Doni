import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPaysansComponent } from './detail-paysans.component';

describe('DetailPaysansComponent', () => {
  let component: DetailPaysansComponent;
  let fixture: ComponentFixture<DetailPaysansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPaysansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPaysansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
