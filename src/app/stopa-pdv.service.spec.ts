import { TestBed, inject } from '@angular/core/testing';

import { StopaPdvService } from './stopa-pdv.service';

describe('StopaPdvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StopaPdvService]
    });
  });

  it('should be created', inject([StopaPdvService], (service: StopaPdvService) => {
    expect(service).toBeTruthy();
  }));
});
