import { TestBed } from '@angular/core/testing';

import { ConsoleserviceService } from './consoleservice.service';

describe('ConsoleserviceService', () => {
  let service: ConsoleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
