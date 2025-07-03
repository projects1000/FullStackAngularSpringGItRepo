import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhisekComponent } from './abhisek.component';

describe('AbhisekComponent', () => {
  let component: AbhisekComponent;
  let fixture: ComponentFixture<AbhisekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhisekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhisekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
