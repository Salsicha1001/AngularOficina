import { TestBed } from '@angular/core/testing';

import { ProdutcsService } from './produtcs.service';

describe('ProdutcsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdutcsService = TestBed.get(ProdutcsService);
    expect(service).toBeTruthy();
  });
});
