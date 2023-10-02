import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAngraisComponent } from './list-angrais.component';

describe('ListAngraisComponent', () => {
  let component: ListAngraisComponent;
  let fixture: ComponentFixture<ListAngraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAngraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAngraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
