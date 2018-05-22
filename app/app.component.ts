import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input 
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)">

      <template [ngIf]="name.length"> 
        <div>
          Searching for ... {{ name }} 
        </div>
      </template>
      <div *ngIf="name.length"> 
        Searching for ... {{ name }} 
      </div>
    </div>
  ` 
})
// the ngIf is actually saved inside the template
//Web components
export class AppComponent { // this allows us to import it in the app.module.ts
  name: string = '' ;

  handleChange(value: string) {
    this.name = value;
  }
}
 