// This page was created by ionic when the initial page was created, I need to look into what all it does but I
// have not yet do anything with it as such I would leave this page alone for now

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpiPage } from './rpi.page';

describe('RpiPage', () => {
  let component: RpiPage;
  let fixture: ComponentFixture<RpiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
