import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team9Component } from './team9.component';

describe('Team9Component', () => {
  let component: Team9Component;
  let fixture: ComponentFixture<Team9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Team9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
