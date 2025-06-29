import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShobhaComponent } from './shobha.component';

describe('ShobhaComponent', () => {
  let component: ShobhaComponent;
  let fixture: ComponentFixture<ShobhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShobhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShobhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
