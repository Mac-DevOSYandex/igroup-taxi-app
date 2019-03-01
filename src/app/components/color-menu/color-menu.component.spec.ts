import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMenuPage } from './color-menu.page';

describe('ColorMenuPage', () => {
  let component: ColorMenuPage;
  let fixture: ComponentFixture<ColorMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
