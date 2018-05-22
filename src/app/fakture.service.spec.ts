import { TestBed, inject } from '@angular/core/testing';

import { FaktureService } from './fakture.service';

describe('FaktureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaktureService]
    });
  });

  it('should be created', inject([FaktureService], (service: FaktureService) => {
    expect(service).toBeTruthy();
  }));
});
