import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team1Component } from './team1.component';

describe('Team1Component', () => {
  let component: Team1Component;
  let fixture: ComponentFixture<Team1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Team1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
