import { TestBed, async, inject } from '@angular/core/testing';

import { AuthListGuard } from './auth-list.guard';

describe('AuthListGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthListGuard]
    });
  });

  it('should ...', inject([AuthListGuard], (guard: AuthListGuard) => {
    expect(guard).toBeTruthy();
  }));
});
