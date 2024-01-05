import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  happy: boolean = false;

  Constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    this.show = !this.show; // função que inverte a ação, (Toggle)
  }
  showImgs(): void {
    this.happy = !this.happy;
  }
}
