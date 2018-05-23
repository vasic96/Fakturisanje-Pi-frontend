import { TestBed, inject } from '@angular/core/testing';

import { GrupaRobeService } from './grupa-robe.service';

describe('GrupaRobeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrupaRobeService]
    });
  });

  it('should be created', inject([GrupaRobeService], (service: GrupaRobeService) => {
    expect(service).toBeTruthy();
  }));
});
