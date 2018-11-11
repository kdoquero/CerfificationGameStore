import { TestBed, inject } from '@angular/core/testing';

import { GameStoreApiService } from './game-store-api.service';

describe('GameStoreApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStoreApiService]
    });
  });

  it('should be created', inject([GameStoreApiService], (service: GameStoreApiService) => {
    expect(service).toBeTruthy();
  }));
});
