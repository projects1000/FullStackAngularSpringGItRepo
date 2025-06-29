import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkanshaComponent } from './akansha.component';

describe('AkanshaComponent', () => {
  let component: AkanshaComponent;
  let fixture: ComponentFixture<AkanshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkanshaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkanshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
