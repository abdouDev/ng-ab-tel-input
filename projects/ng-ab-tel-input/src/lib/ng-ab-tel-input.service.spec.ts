import { TestBed } from '@angular/core/testing';

import { NgAbTelInputService } from './ng-ab-tel-input.service';

describe('NgAbTelInputService', () => {
  let service: NgAbTelInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAbTelInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
