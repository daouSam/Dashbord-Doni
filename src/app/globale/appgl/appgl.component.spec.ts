import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppglComponent } from './appgl.component';

describe('AppglComponent', () => {
  let component: AppglComponent;
  let fixture: ComponentFixture<AppglComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppglComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
