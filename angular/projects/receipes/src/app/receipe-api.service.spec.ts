import { TestBed } from '@angular/core/testing';

import { ReceipeAPIService } from './receipe-api.service';

describe('ReceipeAPIService', () => {
  let service: ReceipeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
