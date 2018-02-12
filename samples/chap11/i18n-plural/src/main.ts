import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getTranslationProviders } from './app/i18n-providers';

import { AppModule } from './app/app.module';

getTranslationProviders().then(providers => {
  platformBrowserDynamic().bootstrapModule(AppModule, { providers });
});

