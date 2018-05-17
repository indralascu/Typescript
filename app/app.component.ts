import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <button (click)="handleClick(username.value)">
      Change me
    </button>
      <input 
        type="text" #username>
      <div> {{ name }} </div>
    </div>
  `
})
export class AppComponent { // this allows us to import it in the app.module.ts
  name: string = "Indra";

  handleClick(value: string) {
    this.name = value;
  }
}
 