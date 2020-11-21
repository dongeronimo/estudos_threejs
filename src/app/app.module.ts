import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { EngineComponent } from './engine/engine.component';

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    EngineComponent,

  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
