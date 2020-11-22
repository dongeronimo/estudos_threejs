import { BehaviorSubject } from 'rxjs';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'threejs-angular';
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenavOpen = new BehaviorSubject<boolean>(false);
  currentSidenavState:boolean;

  constructor(private router: Router) {
  }
  ngAfterViewInit(): void {
    this.sidenavOpen.subscribe({
      next: (v: boolean) => {
        this.currentSidenavState = v;
        if (this.currentSidenavState === true){
          this.sidenav.open();
        }else{
          this.sidenav.close();
        }
      }
    });
  }
  close(reason: string): void {
    this.sidenavOpen.next(false);
  }
  toggleMenu(): void {
    this.sidenavOpen.next(!this.currentSidenavState);
  }
  gotoHome(): void {
    this.router.navigateByUrl('/');
    this.sidenavOpen.next(false);
  }
  gotoThreejsAngularIntegration(): void {
    this.router.navigateByUrl('/threejs-angular');
    this.sidenavOpen.next(false);
  }
  gotoFBXAnimations(): void {
    this.sidenavOpen.next(false);
  }
  gotoNavmesh(): void {
    this.sidenavOpen.next(false);
  }
}
