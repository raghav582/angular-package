import { TestBed } from '@angular/core/testing';

import { RgvJpathPickerService } from './rgv-jpath-picker.service';

describe('RgvJpathPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgvJpathPickerService = TestBed.get(RgvJpathPickerService);
    expect(service).toBeTruthy();
  });
});
