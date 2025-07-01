import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpsitaComponent } from './ipsita.component';

describe('IpsitaComponent', () => {
  let component: IpsitaComponent;
  let fixture: ComponentFixture<IpsitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpsitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpsitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
