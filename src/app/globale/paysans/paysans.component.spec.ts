import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysansComponent } from './paysans.component';

describe('PaysansComponent', () => {
  let component: PaysansComponent;
  let fixture: ComponentFixture<PaysansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
