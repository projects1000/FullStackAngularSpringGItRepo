import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartbizHomeComponent } from './smartbiz-home.component';

describe('SmartbizHomeComponent', () => {
  let component: SmartbizHomeComponent;
  let fixture: ComponentFixture<SmartbizHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartbizHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartbizHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
