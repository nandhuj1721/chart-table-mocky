import { TestBed } from '@angular/core/testing';

import { MockyService } from './mocky.service';

describe('MockyService', () => {
  let service: MockyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
