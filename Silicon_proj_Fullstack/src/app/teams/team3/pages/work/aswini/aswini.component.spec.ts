import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AswiniComponent } from './aswini.component';

describe('AswiniComponent', () => {
  let component: AswiniComponent;
  let fixture: ComponentFixture<AswiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AswiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AswiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
