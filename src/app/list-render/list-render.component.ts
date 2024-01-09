import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Max', type: 'Dog', age: 7 },
    { name: 'Tom', type: 'Cat', age: 14 },
    { name: 'Teca', type: 'Dog', age: 3 },
    { name: 'Frida', type: 'Horse', age: 26 },
  ];

  animal: Animal = {
    name: 'teste',
    type: 'alguma coisa',
    age: 34,
  };

  animalDetails = '';

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!!`;
  }
}
