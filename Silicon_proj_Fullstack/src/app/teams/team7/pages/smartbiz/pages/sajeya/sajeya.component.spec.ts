import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SajeyaComponent } from './sajeya.component';

describe('SajeyaComponent', () => {
  let component: SajeyaComponent;
  let fixture: ComponentFixture<SajeyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SajeyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SajeyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
