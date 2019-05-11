import { TestBed } from '@angular/core/testing';

import { AddressCardService } from './address-card.service';

describe('AddressCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddressCardService = TestBed.get(AddressCardService);
    expect(service).toBeTruthy();
  });
});
