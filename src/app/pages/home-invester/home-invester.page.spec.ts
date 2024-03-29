import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInvesterPage } from './home-invester.page';

describe('HomeInvesterPage', () => {
  let component: HomeInvesterPage;
  let fixture: ComponentFixture<HomeInvesterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInvesterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInvesterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
