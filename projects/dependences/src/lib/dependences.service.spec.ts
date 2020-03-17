import { TestBed } from '@angular/core/testing';

import { DependencesService } from './dependences.service';

describe('DependencesService', () => {
  let service: DependencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
