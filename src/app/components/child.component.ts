import { Input, Component } from '@angular/core';

@Component({
  selector: 'child-block',
  template: `<h1 class="red">{{title}}</h1>
             <div class="content-block col-1-4">
               <h3>{{name}}</h3>
               {{content}}
               {{message}}
             </div>
             <input #box (keyup)="0">
             <p>{{box.value}}</p>
             <p>Имя пользователя: {{userName}}</p>
             <p>Возраст пользователя: {{userAge}}</p>
             <p #tcont>Это просто текст</p>
             <p>{{tcont.textContent}}</p>`,
  styles: [':host .red {color: red}']
})
export class ChildComponent {
  @Input() userName: string;
  _userAge: number;

  @Input()
  set userAge(age: number) {
      if (age < 0)
          this._userAge = 0;
      else if (age > 100)
          this._userAge = 100;
      else
          this._userAge = age;
  }
  get userAge() {
      return this._userAge
  }

  title = 'Дочерний элемент';
  content = 'Потомок родительского блока. Child :)';
  name = 'Children block';
  message = '';
  temperature = 36;

  sayWordTwise() {
      this.message = 'New content';
  }

  onClickButton(event) {
    this.message = event.target.value;
  }
}
