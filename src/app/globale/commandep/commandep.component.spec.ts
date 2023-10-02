import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandepComponent } from './commandep.component';

describe('CommandepComponent', () => {
  let component: CommandepComponent;
  let fixture: ComponentFixture<CommandepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
