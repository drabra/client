import { TestBed, inject } from '@angular/core/testing';

import { OceneService } from './ocene.service';

describe('OceneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OceneService]
    });
  });

  it('should be created', inject([OceneService], (service: OceneService) => {
    expect(service).toBeTruthy();
  }));
});
