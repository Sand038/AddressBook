import { TestBed } from '@angular/core/testing';

import { UserOpsService } from './user-ops.service';

describe('UserOpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserOpsService = TestBed.get(UserOpsService);
    expect(service).toBeTruthy();
  });
});
