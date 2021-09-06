import { TestBed } from '@angular/core/testing';

import { DtosService } from './dtos.service';

describe('DtosService', () => {
  let service: DtosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
