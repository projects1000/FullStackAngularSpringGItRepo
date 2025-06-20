import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpComponent } from './erp.component';

describe('ErpComponent', () => {
  let component: ErpComponent;
  let fixture: ComponentFixture<ErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
