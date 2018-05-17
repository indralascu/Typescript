import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <button (click)="handleClick()">
      Change me
    </button>
      <input 
        type="text"
        [ngModel] = "name"
        (ngModelChange)="handleChange($event)">
        <input 
        type="text"
        [(ngModel)] = "name">
      <div> {{ name }} </div>
    </div>
  `
})
export class AppComponent { // this allows us to import it in the app.module.ts
  name: string = "Indra";


  handleChange(value:any) {
    this.name = value;
  }

  handleClick() {
    this.name = "Back to basics";
  }
}
 