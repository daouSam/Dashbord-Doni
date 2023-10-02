import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchasideComponent } from './echaside.component';

describe('EchasideComponent', () => {
  let component: EchasideComponent;
  let fixture: ComponentFixture<EchasideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchasideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
