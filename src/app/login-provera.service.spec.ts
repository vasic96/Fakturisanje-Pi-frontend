import { TestBed, inject } from '@angular/core/testing';

import { LoginProveraService } from './login-provera.service';

describe('LoginProveraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginProveraService]
    });
  });

  it('should be created', inject([LoginProveraService], (service: LoginProveraService) => {
    expect(service).toBeTruthy();
  }));
});
