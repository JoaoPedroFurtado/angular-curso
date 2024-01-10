import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a: Animal) => animal.name !== a.name);
  }
}
