import { TestBed } from '@angular/core/testing';

import { VolanteerService } from './volanteer.service';

describe('VolanteerService', () => {
  let service: VolanteerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolanteerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
