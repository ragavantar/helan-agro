import { TestBed } from '@angular/core/testing';

import { RegistrationInvesterService } from './registration-invester.service';

describe('RegistrationInvesterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationInvesterService = TestBed.get(RegistrationInvesterService);
    expect(service).toBeTruthy();
  });
});
