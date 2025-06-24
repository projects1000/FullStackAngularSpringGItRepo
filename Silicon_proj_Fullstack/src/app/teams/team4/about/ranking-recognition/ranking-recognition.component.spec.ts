import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingRecognitionComponent } from './ranking-recognition.component';

describe('RankingRecognitionComponent', () => {
  let component: RankingRecognitionComponent;
  let fixture: ComponentFixture<RankingRecognitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingRecognitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
