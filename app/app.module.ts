//create the module
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//We need to tell index.html to bootstrap this appComponent
import { AppComponent } from './app.component'; //imported the component into the module

//tell the component it needs to be part of the module
//module is a container containing our components and our dependencies

//this is a special decorator
@NgModule({
  // to register this app component in the module
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  //create a property to reference AppComponent
  bootstrap: [AppComponent]  
})
export class AppModule {}