import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import * as THREE from 'three';
import { AnimationMixer, Camera, Object3D, Scene, WebGLRenderer } from 'three';

import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { debug } from 'console';
import Sistema3d from 'src/sistema3d/Sistema3d';
@Injectable({
  providedIn: 'root'
})
export class EngineService implements OnDestroy{
  private sistema3d: Sistema3d;
  private frameId: number = null;
  constructor(private ngZone: NgZone) { }
  public ngOnDestroy(): void{
    if(!!this.frameId){
      cancelAnimationFrame(this.frameId);
    }
  }

  public createScene(canvas: ElementRef<HTMLDivElement>): void{
    this.sistema3d = new Sistema3d(canvas.nativeElement);
    canvas.nativeElement.addEventListener('click', (ev)=>{
      const id = this.sistema3d.pick(ev);
      console.log("Clicou em "+id);
      const pickedObject = this.sistema3d.scene.getObjectById(id);
      console.log(pickedObject);
    });
  }

  public loadAssets(): void {
    this.sistema3d.load('/assets/Capoeira.fbx')
      .then(obj => {
        this.sistema3d.insertObjectInScene(obj, 'capoeira');
      })
      .catch(err=>{
        console.error(err);
      })
  }

  public animate(): void{
    //Me disseram que tem que ser fora do contexto do angular para não dar problemas de desempenho.
    this.ngZone.runOutsideAngular(()=>{
      if (document.readyState !== 'loading'){
        this.render();
      }
    });
    console.log('animate');
  }

  private render(): void {
    this.frameId = requestAnimationFrame(()=>{
      this.render();
    });
    this.sistema3d.render();
  }
}
