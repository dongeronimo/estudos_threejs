import { ThreejsAngularIntegrationViewComponent } from './threejs-angular-integration-view/threejs-angular-integration-view.component';
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
import {MatSidenavModule} from '@angular/material/sidenav'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoobarComponent } from './foobar/foobar.component';

const routes: Routes = [
  {path: 'foobar', component: FoobarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'threejs-angular', component: ThreejsAngularIntegrationViewComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    EngineComponent,
    PickedObjectViewComponent,
    CameraDebugViewComponent,
    HomeComponent,
    FoobarComponent,

  ],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
