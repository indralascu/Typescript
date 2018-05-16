import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{title}}
    </div>
  `
})
export class AppComponent { // this allows us to import it in the app.module.ts
  title: string;

  constructor() {
    this.title = 'Ultimate Angular';
  }
}
 