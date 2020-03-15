import { TestBed } from '@angular/core/testing';

import { OsServiceService } from './os-service.service';

describe('OsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsServiceService = TestBed.get(OsServiceService);
    expect(service).toBeTruthy();
  });
});
