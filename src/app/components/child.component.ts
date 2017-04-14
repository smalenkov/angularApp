import { Component } from '@angular/core';

@Component({
  selector: 'child-block',
  template: `<ng-content></ng-content>
             <h1>{{title}}</h1>
             <div class="content-block col-1-4">
             <h3>{{name}}</h3>
             {{content}}
             </div>`
})
export class ChildComponent {
  title = 'Дочерний элемент';
  content = 'Потомок родительского блока. Child :)';
  name = 'Children block';
}
