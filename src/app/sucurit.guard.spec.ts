import { TestBed } from '@angular/core/testing';

import { SucuritGuard } from './sucurit.guard';

describe('SucuritGuard', () => {
  let guard: SucuritGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SucuritGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
