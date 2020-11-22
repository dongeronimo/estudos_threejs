import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { EngineComponent } from './engine/engine.component';
import { PickedObjectViewComponent } from './picked-object-view/picked-object-view.component';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CameraDebugViewComponent } from './camera-debug-view/camera-debug-view.component';
@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    EngineComponent,
    PickedObjectViewComponent,
    CameraDebugViewComponent,

  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
