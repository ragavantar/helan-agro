import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInvesterPage } from './details-invester.page';

describe('DetailsInvesterPage', () => {
  let component: DetailsInvesterPage;
  let fixture: ComponentFixture<DetailsInvesterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsInvesterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsInvesterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
