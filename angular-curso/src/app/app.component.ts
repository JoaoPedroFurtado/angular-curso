import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Jp'

  userData = {
    email: 'joaopedro@gmail.com',
    role: 'Admin'
  }
  userFunction = {
    hobby: 'Programar',
    streaming: 'Netflix'
  }

  title = 'angular-curso';
}
