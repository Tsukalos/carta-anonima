import { TestBed } from '@angular/core/testing';

import { Pagination2Service } from './pagination2.service';

describe('Pagination2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Pagination2Service = TestBed.get(Pagination2Service);
    expect(service).toBeTruthy();
  });
});
