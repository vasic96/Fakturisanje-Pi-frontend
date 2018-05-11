import { TestBed, inject } from '@angular/core/testing';

import { MestoService } from './mesto.service';

describe('MestoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MestoService]
    });
  });

  it('should be created', inject([MestoService], (service: MestoService) => {
    expect(service).toBeTruthy();
  }));
});
