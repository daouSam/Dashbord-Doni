import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommdpvalideComponent } from './commdpvalide.component';

describe('CommdpvalideComponent', () => {
  let component: CommdpvalideComponent;
  let fixture: ComponentFixture<CommdpvalideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommdpvalideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommdpvalideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
