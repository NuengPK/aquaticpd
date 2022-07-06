 import { TestBed } from '@angular/core/testing';

import { DistributionService } from './distridution.service';

describe('DistridutionService', () => {
  let service: DistributionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistributionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
