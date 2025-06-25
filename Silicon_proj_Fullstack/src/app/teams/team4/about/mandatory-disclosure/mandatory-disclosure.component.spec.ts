import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatoryDisclosureComponent } from './mandatory-disclosure.component';

describe('MandatoryDisclosureComponent', () => {
  let component: MandatoryDisclosureComponent;
  let fixture: ComponentFixture<MandatoryDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandatoryDisclosureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandatoryDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
