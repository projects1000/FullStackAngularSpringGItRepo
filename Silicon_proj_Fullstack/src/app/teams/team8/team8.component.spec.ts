import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team8Component } from './team8.component';

describe('Team8Component', () => {
  let component: Team8Component;
  let fixture: ComponentFixture<Team8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Team8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
