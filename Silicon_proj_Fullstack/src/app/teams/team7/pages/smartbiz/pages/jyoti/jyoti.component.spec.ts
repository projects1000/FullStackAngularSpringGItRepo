import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JyotiComponent } from './jyoti.component';

describe('JyotiComponent', () => {
  let component: JyotiComponent;
  let fixture: ComponentFixture<JyotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JyotiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JyotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
