import { TestBed } from '@angular/core/testing';

import { SwnatMandrillService } from './swnat-mandrill.service';

describe('SwnatMandrillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // @ts-ignore
    const service: SwnatMandrillService = TestBed.inject(SwnatMandrillService);
    expect(service).toBeTruthy();
  });
});
