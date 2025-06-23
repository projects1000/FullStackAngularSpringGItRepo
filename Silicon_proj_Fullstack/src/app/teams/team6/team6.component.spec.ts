import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team6Component } from './team6.component';

describe('Team6Component', () => {
  let component: Team6Component;
  let fixture: ComponentFixture<Team6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Team6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
