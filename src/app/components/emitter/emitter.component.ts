import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  standalone: true,
  imports: [CommonModule, ChangeNumberComponent],
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss'],
})
export class EmitterComponent implements OnInit {
  myNumber: number = 0;
  constructor() {}

  ngOnInit(): void {}

  onChangeNumber() {
    console.log('Deu Certo !!');
  }
}
