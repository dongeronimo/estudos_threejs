import { MyViewModelService } from './../my-view-model.service';
import { Component, OnInit } from '@angular/core';
import { Camera } from 'three';
import * as THREE from 'three';

@Component({
  selector: 'app-camera-debug-view',
  templateUrl: './camera-debug-view.component.html',
  styleUrls: ['./camera-debug-view.component.css']
})
export class CameraDebugViewComponent implements OnInit {
  camera: THREE.Camera;
  worldDirection: THREE.Vector3 = new THREE.Vector3();
  constructor(private viewModel:MyViewModelService) { }

  ngOnInit(): void {
    this.viewModel.camera.subscribe({ 
      next: (value: THREE.Camera) => {
        value.getWorldDirection(this.worldDirection)
        this.camera = value;
      }
    });
  }
}

