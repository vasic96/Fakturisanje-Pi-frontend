import { TestBed, inject } from '@angular/core/testing';

import { PoslovniPartnerService } from './poslovni-partner.service';

describe('PoslovniPartnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoslovniPartnerService]
    });
  });

  it('should be created', inject([PoslovniPartnerService], (service: PoslovniPartnerService) => {
    expect(service).toBeTruthy();
  }));
});
