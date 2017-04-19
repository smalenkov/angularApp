import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../components/app.component';
import { LinkComponent } from '../components/link.component';
import { MonkeyComponent } from '../components/monkey.component';
import { ChildComponent } from '../components/Child.component';
import { KeysComponent } from "../components/keys.component";

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    MonkeyComponent,
    ChildComponent,
    KeysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: LinkComponent
      },
      {
        path: 'monkeys',
        component: MonkeyComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
