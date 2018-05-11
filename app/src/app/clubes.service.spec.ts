import { TestBed, inject } from '@angular/core/testing';

import { ClubesService } from './clubes.service';

describe('ClubesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubesService]
    });
  });

  it('should be created', inject([ClubesService], (service: ClubesService) => {
    expect(service).toBeTruthy();
  }));
});
