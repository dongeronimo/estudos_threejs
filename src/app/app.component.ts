import { BehaviorSubject } from 'rxjs';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

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
  ngAfterViewInit(): void {
    this.sidenavOpen.subscribe({
      next:(v: boolean) => {
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
}
