import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KritidayaComponent } from './kritidaya.component';

describe('KritidayaComponent', () => {
  let component: KritidayaComponent;
  let fixture: ComponentFixture<KritidayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KritidayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KritidayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
