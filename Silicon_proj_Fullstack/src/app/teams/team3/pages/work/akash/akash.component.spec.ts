import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkashComponent } from './akash.component';

describe('AkashComponent', () => {
  let component: AkashComponent;
  let fixture: ComponentFixture<AkashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
