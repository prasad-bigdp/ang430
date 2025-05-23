import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { myguardGuard } from './myguard.guard';

describe('myguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
