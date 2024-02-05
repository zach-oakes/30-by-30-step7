import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInListViewComponent } from './check-in-list-view.component';

describe('CheckInListViewComponent', () => {
  let component: CheckInListViewComponent;
  let fixture: ComponentFixture<CheckInListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckInListViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckInListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
