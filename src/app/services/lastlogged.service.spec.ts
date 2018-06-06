import { TestBed, inject } from '@angular/core/testing';

import { LastloggedService } from './lastlogged.service';

describe('LastloggedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastloggedService]
    });
  });

  it('should be created', inject([LastloggedService], (service: LastloggedService) => {
    expect(service).toBeTruthy();
  }));
});
