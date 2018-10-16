import { TestBed, inject } from '@angular/core/testing';

import { GiantBombApiService } from './giant-bomb-api.service';

describe('GiantBombApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiantBombApiService]
    });
  });

  it('should be created', inject([GiantBombApiService], (service: GiantBombApiService) => {
    expect(service).toBeTruthy();
  }));
});
