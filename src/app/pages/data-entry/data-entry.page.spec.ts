// This page was created by ionic when the initial page was created, I need to look into what all it does but I
// have not yet do anything with it as such I would leave this page alone for now

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryPage } from './data-entry.page';

describe('DataEntryPage', () => {
  let component: DataEntryPage;
  let fixture: ComponentFixture<DataEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEntryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
