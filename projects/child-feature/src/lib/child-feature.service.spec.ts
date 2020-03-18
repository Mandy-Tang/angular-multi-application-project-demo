import { TestBed } from '@angular/core/testing';

import { ChildFeatureService } from './child-feature.service';

describe('ChildFeatureService', () => {
  let service: ChildFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
