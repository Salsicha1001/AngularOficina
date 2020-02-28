import { TestBed } from '@angular/core/testing';

import { CEPService } from './cep.service';

describe('CEPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CEPService = TestBed.get(CEPService);
    expect(service).toBeTruthy();
  });
});
