import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit,  } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {


  name: string = "joao pedro"
  age: number = 40;
  job = 'Programador'
  hobbies = ["correr", "estudar", "jogar"]
  car = {
    name: "jetta",
    year: "2017"
  }

}
