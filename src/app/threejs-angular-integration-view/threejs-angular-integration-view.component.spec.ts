import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsAngularIntegrationViewComponent } from './threejs-angular-integration-view.component';

describe('ThreejsAngularIntegrationViewComponent', () => {
  let component: ThreejsAngularIntegrationViewComponent;
  let fixture: ComponentFixture<ThreejsAngularIntegrationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreejsAngularIntegrationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsAngularIntegrationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
