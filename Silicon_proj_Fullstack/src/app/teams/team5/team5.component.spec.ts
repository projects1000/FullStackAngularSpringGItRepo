import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team5Component } from './team5.component';

describe('Team5Component', () => {
  let component: Team5Component;
  let fixture: ComponentFixture<Team5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Team5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Team5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
