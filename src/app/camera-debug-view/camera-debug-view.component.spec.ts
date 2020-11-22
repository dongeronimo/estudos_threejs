import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraDebugViewComponent } from './camera-debug-view.component';

describe('CameraDebugViewComponent', () => {
  let component: CameraDebugViewComponent;
  let fixture: ComponentFixture<CameraDebugViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraDebugViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraDebugViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
