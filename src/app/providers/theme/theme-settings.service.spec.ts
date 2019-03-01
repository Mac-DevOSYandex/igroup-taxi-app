import { TestBed } from '@angular/core/testing';

import { ThemeSettings } from './theme-settings.service';

describe('ThemeSettings', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeSettings = TestBed.get(ThemeSettings);
    expect(service).toBeTruthy();
  });
});
