import { EngineService } from './../engine.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {
  @ViewChild('rendererElement', {static: true})
  public rendererElement: ElementRef<HTMLDivElement>;

  constructor(private engineService: EngineService) { }

  ngOnInit(): void {
    this.engineService.createScene(this.rendererElement);
    this.engineService.loadAssets();
    this.engineService.animate();
  }

}
