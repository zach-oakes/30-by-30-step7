import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInDetailViewComponent } from './check-in-detail-view.component';

describe('CheckInDetailViewComponent', () => {
  let component: CheckInDetailViewComponent;
  let fixture: ComponentFixture<CheckInDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckInDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckInDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
