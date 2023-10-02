import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailangraisComponent } from './detailangrais.component';

describe('DetailangraisComponent', () => {
  let component: DetailangraisComponent;
  let fixture: ComponentFixture<DetailangraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailangraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailangraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
