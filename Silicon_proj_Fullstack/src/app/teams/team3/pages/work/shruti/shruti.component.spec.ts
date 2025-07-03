import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrutiComponent } from './shruti.component';

describe('ShrutiComponent', () => {
  let component: ShrutiComponent;
  let fixture: ComponentFixture<ShrutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShrutiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShrutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
