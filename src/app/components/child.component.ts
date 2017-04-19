import { Input, Component } from '@angular/core';

@Component({
  selector: 'child-block',
  template: `<ng-content></ng-content>
             <h1>{{title}}</h1>
             <div class="content-block col-1-4">
               <h3>{{name}}</h3>
               {{content}}
             </div>
             <input (focus)="onClickButton($event)">
             {{message}}
             <input #box (keyup)="0">
             <p>{{box.value}}</p>
             <p>Имя пользователя: {{userName}}</p>
             <p>Возраст пользователя: {{userAge}}</p>`
})
export class ChildComponent {
  @Input() userName: string;
  @Input() userAge: number;
  title = 'Дочерний элемент';
  content = 'Потомок родительского блока. Child :)';
  name = 'Children block';
  message = '';
  onClickButton(event) {
    this.message = event.target.value;
  }
}
