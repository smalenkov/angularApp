import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/app.component.css']
})
export class AppComponent {
  title = 'App works!';
  content = 'Мы будем использовать браузер в качестве окружения, но основное внимание будет уделяться именно самому языку JavaScript.';
  name = '';
  uName: string = 'Семен';
  uAge: number = 28;
  nameval = 'goods';
  users = [
    new User(1, 'Petr'),
    new User(2, 'Adam'),
    new User(5, 'Micheal'),
    new User(13, 'Anna')
  ];

  onClickMe() {
    alert('Hello man :)');
  }
}
