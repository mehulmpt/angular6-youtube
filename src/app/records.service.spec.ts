import { TestBed, inject } from '@angular/core/testing';

import { RecordsService } from './records.service';

describe('RecordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordsService]
    });
  });

  it('should be created', inject([RecordsService], (service: RecordsService) => {
    expect(service).toBeTruthy();
  }));
});
