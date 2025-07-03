import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigdarshanComponent } from './digdarshan.component';

describe('DigdarshanComponent', () => {
  let component: DigdarshanComponent;
  let fixture: ComponentFixture<DigdarshanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigdarshanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigdarshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
