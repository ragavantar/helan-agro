import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFarmerEquipmentsPage } from './registration-farmer-equipments.page';

describe('RegistrationFarmerEquipmentsPage', () => {
  let component: RegistrationFarmerEquipmentsPage;
  let fixture: ComponentFixture<RegistrationFarmerEquipmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFarmerEquipmentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFarmerEquipmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
