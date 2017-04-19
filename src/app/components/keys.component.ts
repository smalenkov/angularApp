import { Input, Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'keys-block',
  template: `<button (click)="change(true)">+</button>
             <button (click)="change(false)">-</button>
             <button (click)="sayHello('Hello')">Hello</button>`,
  styleUrls: ['../styles/keys.component.css']
})
export class KeysComponent {
  temperature = 42;
  @Output() onChanged = new EventEmitter<boolean>();
  change(i) {
      this.onChanged.emit(i);
  }
  @Output() say = new EventEmitter<string>();
  sayHello(word) {
      this.say.emit(word);
  }
}
