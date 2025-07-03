import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhushiComponent } from './khushi.component';

describe('KhushiComponent', () => {
  let component: KhushiComponent;
  let fixture: ComponentFixture<KhushiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhushiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
