import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team10Component } from './team10.component';

describe('Team10Component', () => {
  let component: Team10Component;
  let fixture: ComponentFixture<Team10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Team10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
