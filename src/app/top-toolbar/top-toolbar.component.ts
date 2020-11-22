import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {
  @Input() title: string;
  @Output() hamburgerClicked: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.hamburgerClicked.emit();
  }
}
