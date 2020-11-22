import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedObjectViewComponent } from './picked-object-view.component';

describe('PickedObjectViewComponent', () => {
  let component: PickedObjectViewComponent;
  let fixture: ComponentFixture<PickedObjectViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickedObjectViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickedObjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
