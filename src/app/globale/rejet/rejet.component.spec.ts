import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejetComponent } from './rejet.component';

describe('RejetComponent', () => {
  let component: RejetComponent;
  let fixture: ComponentFixture<RejetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
