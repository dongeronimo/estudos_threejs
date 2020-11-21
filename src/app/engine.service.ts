import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import * as THREE from 'three';
import { AnimationMixer, Camera, Object3D, Scene, WebGLRenderer } from 'three';
import { GPUPicker } from 'three_gpu_picking';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { debug } from 'console';
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
class Sistema3d {
  private camera: Camera;
  public scene: Scene;
  private renderer: WebGLRenderer;
  private mixers: AnimationMixer[] = [];
  private gpuPicker: GPUPicker;
  readonly container: HTMLDivElement;
  readonly pixelRatio = window.devicePixelRatio ? 1.0 / window.devicePixelRatio : 1.0;
  private controls: OrbitControls;
  constructor(container: HTMLDivElement){
    this.container = container;
    this.init();
  }
  private init(): void{
      this.camera = this.createCamera(this.container);
      this.scene = this.createScene();
      this.createLights(this.scene);
      this.renderer = this.createRenderer(this.container);
      this.gpuPicker = new GPUPicker(THREE, this.renderer, this.scene, this.camera, this.idFromObject);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }
  public load(fbxUrl: string): Promise<Object3D>{
      return new Promise((resolve, reject) => {
          const loader = new FBXLoader();
          loader.load(fbxUrl, (object) => {
              resolve(object);
          }, (progress) => {}, (error) => {
              reject(error);
          });
      });
  }
  public insertObjectInScene(object, name: string): void{
      const loadedObjectTree = object;
      const loadedScene = new THREE.Scene();
      loadedScene.name = name;
      loadedScene.add(loadedObjectTree);
      this.scene.add(loadedScene);
      if (object.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(object);
          const action = mixer.clipAction(object.animations[0]);
          action.play();
          this.mixers.push(mixer);
      }
  }
  public pick(ev): number{
      return this.gpuPick(ev);
  }
  public render(): void{
      this.mixers.forEach(mixer => {
          mixer.update(0.01);
      });
      this.renderer.render(this.scene, this.camera);
  }
  private gpuPick(ev): number{
      const inversePixelRatio = 1.0 / this.pixelRatio;
      const objId = this.gpuPicker.pick(ev.offsetX * inversePixelRatio, ev.offsetY * inversePixelRatio);
      return this.idFromObject(this.scene.getObjectById(objId));
  }
  private createCamera(container: HTMLDivElement): Camera{
      const camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 1, 10000 );
      camera.position.set( - 500, 500, 750 );
      return camera;
  }
  private createScene(): Scene{
      const scene = new THREE.Scene();
      scene.background = new THREE.Color( 0xfff0f0 );
      return scene;
  }
  private createLights(scene: Scene): void{
      const light = new THREE.DirectionalLight( 0xffffff );
      light.position.set( 0.5, 0.5, 1 );
      scene.add( light );
      const ambientLight = new THREE.AmbientLight( 0x080808 );
      scene.add( ambientLight );
  }
  private createRenderer(container:HTMLDivElement): WebGLRenderer{
      const renderer = new THREE.WebGLRenderer();
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( container.offsetWidth, container.offsetHeight );
      container.appendChild( renderer.domElement );
      return renderer;
  }
  public idFromObject(obj): any {
      let ret = obj;
      while (ret) {
          if (ret.type === 'Scene') {return ret.id;} 
          else { ret = ret.parent;}
      }
  }
}