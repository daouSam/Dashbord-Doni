import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchabodyComponent } from './echabody.component';

describe('EchabodyComponent', () => {
  let component: EchabodyComponent;
  let fixture: ComponentFixture<EchabodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchabodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchabodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
