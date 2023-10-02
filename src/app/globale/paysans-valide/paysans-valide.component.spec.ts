import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysansValideComponent } from './paysans-valide.component';

describe('PaysansValideComponent', () => {
  let component: PaysansValideComponent;
  let fixture: ComponentFixture<PaysansValideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysansValideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysansValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
