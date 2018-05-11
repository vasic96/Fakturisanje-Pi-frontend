import { TestBed, inject } from '@angular/core/testing';

import { RegistracijaService } from './registracija.service';

describe('RegistracijaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistracijaService]
    });
  });

  it('should be created', inject([RegistracijaService], (service: RegistracijaService) => {
    expect(service).toBeTruthy();
  }));
});
