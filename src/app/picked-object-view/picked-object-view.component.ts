import { MyViewModelService } from './../my-view-model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picked-object-view',
  templateUrl: './picked-object-view.component.html',
  styleUrls: ['./picked-object-view.component.css']
})
export class PickedObjectViewComponent implements OnInit {
  pickedObject: THREE.Object3D|null;
  constructor(private viewModel: MyViewModelService) { }

  ngOnInit(): void {
    this.viewModel.pickedObject.subscribe({
      next: (value: THREE.Object3D) => {
        this.pickedObject = value;
      }
    });
  }
}
