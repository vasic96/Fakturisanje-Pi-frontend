import { TestBed, inject } from '@angular/core/testing';

import { StavkeCenovnikaService } from './stavke-cenovnika.service';

describe('StavkeCenovnikaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StavkeCenovnikaService]
    });
  });

  it('should be created', inject([StavkeCenovnikaService], (service: StavkeCenovnikaService) => {
    expect(service).toBeTruthy();
  }));
});
