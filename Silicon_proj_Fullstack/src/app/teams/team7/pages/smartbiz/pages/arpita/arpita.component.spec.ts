import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArpitaComponent } from './arpita.component';

describe('ArpitaComponent', () => {
  let component: ArpitaComponent;
  let fixture: ComponentFixture<ArpitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArpitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArpitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
