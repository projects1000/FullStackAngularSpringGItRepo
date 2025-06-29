import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSiliconComponent } from './about-silicon.component';

describe('AboutSiliconComponent', () => {
  let component: AboutSiliconComponent;
  let fixture: ComponentFixture<AboutSiliconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSiliconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSiliconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
