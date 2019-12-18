// This page was created by ionic when the initial page was created, I need to look into what all it does but I
// have not yet do anything with it as such I would leave this page alone for now

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePopoverPage } from './language-popover.page';

describe('LanguagePopoverPage', () => {
  let component: LanguagePopoverPage;
  let fixture: ComponentFixture<LanguagePopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagePopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagePopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
