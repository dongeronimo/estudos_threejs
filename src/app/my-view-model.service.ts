import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyViewModelService {
  public readonly pickedObject = new Subject<THREE.Object3D|null>();
  public readonly camera = new Subject<THREE.Camera|null>();
  constructor() { }
}
