 import { TestBed } from '@angular/core/testing';

import { DistridutionService } from './distridution.service';

describe('DistridutionService', () => {
  let service: DistridutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistridutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
