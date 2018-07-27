import { TestBed, inject } from '@angular/core/testing';

import { PostulantsService } from './postulants.service';

describe('PostulantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostulantsService]
    });
  });

  it('should be created', inject([PostulantsService], (service: PostulantsService) => {
    expect(service).toBeTruthy();
  }));
});
