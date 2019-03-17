import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningItemComponent } from './learning-item.component';

describe('LearningItemComponent', () => {
  let component: LearningItemComponent;
  let fixture: ComponentFixture<LearningItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
