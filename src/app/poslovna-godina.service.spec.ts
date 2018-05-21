import { TestBed, inject } from '@angular/core/testing';

import { PoslovnaGodinaService } from './poslovna-godina.service';

describe('PoslovnaGodinaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoslovnaGodinaService]
    });
  });

  it('should be created', inject([PoslovnaGodinaService], (service: PoslovnaGodinaService) => {
    expect(service).toBeTruthy();
  }));
});
