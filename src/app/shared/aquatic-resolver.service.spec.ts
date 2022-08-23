import { TestBed } from '@angular/core/testing';

import { AquaticResolverService } from './aquatic-resolver.service';

describe('AquaticResolverService', () => {
  let service: AquaticResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AquaticResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
