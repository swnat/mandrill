import { TestBed } from '@angular/core/testing';

import { SwnatMandrillService } from './swnat-mandrill.service';

describe('SwnatMandrillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwnatMandrillService = TestBed.get(SwnatMandrillService);
    expect(service).toBeTruthy();
  });
});
