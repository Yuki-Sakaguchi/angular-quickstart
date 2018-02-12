import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//import { UseService } from './app/use.service';

platformBrowserDynamic().bootstrapModule(AppModule);

/*
platformBrowserDynamic().bootstrapModule(AppModule, {
  providers:  [
    { provide: UseService, useClass: UseService }
  ],
});
*/