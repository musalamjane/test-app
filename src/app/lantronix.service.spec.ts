import { TestBed } from '@angular/core/testing';

import { LantronixService } from './lantronix.service';

describe('LantronixService', () => {
  let service: LantronixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LantronixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
