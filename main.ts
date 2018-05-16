//first step is to import the module
import { AppModule } from './app/app.module';

//tell angular how to bootstrap this
// to compile in the browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //this contains the clientside code that processes our templates and all of our bindings

platformBrowserDynamic() .bootstrapModule(AppModule);