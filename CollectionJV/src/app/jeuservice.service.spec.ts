import { TestBed } from '@angular/core/testing';

import { JeuserviceService } from './jeuservice.service';

describe('JeuserviceService', () => {
  let service: JeuserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeuserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
