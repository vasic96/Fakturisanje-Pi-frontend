import { TestBed, inject } from '@angular/core/testing';

import { JedinicaMereService } from './jedinica-mere.service';

describe('JedinicaMereService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JedinicaMereService]
    });
  });

  it('should be created', inject([JedinicaMereService], (service: JedinicaMereService) => {
    expect(service).toBeTruthy();
  }));
});
