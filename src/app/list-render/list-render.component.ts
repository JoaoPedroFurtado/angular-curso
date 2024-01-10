import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal';
import { CommonModule } from '@angular/common';
import { ListService } from '../services/list.service';

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

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!!`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
