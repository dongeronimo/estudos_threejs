import { TestBed } from '@angular/core/testing';

import { MyViewModelService } from './my-view-model.service';

describe('MyViewModelService', () => {
  let service: MyViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
