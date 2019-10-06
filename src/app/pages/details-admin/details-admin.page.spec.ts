import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAdminPage } from './details-admin.page';

describe('DetailsAdminPage', () => {
  let component: DetailsAdminPage;
  let fixture: ComponentFixture<DetailsAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
