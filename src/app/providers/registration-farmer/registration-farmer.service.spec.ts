import { TestBed } from '@angular/core/testing';

import { RegistrationFarmerService } from './registration-farmer.service';

describe('RegistrationFarmerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationFarmerService = TestBed.get(RegistrationFarmerService);
    expect(service).toBeTruthy();
  });
});
