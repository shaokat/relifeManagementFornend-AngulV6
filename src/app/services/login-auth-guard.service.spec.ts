import { TestBed, inject } from '@angular/core/testing';

import { LoginAuthGuard } from './login-auth-guard.service';

describe('LoginAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuthGuard]
    });
  });

  it('should be created', inject([LoginAuthGuard], (service: LoginAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
