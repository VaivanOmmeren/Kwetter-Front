import { TestBed } from '@angular/core/testing';

import { RegistrateService } from './registrate.service';

describe('RegistrateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrateService = TestBed.get(RegistrateService);
    expect(service).toBeTruthy();
  });
});
