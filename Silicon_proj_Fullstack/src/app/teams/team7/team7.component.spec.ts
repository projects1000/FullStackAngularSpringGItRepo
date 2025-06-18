import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team7Component } from './team7.component';

describe('Team7Component', () => {
  let component: Team7Component;
  let fixture: ComponentFixture<Team7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Team7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
