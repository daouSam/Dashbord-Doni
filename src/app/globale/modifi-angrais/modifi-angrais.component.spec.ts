import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiAngraisComponent } from './modifi-angrais.component';

describe('ModifiAngraisComponent', () => {
  let component: ModifiAngraisComponent;
  let fixture: ComponentFixture<ModifiAngraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiAngraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiAngraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
