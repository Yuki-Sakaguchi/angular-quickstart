import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }  from './main.component';
import { HatenaResolver } from './hatena-resolver.service';
import { HatenaComponent } from './hatena.component';
import { HatenaService} from './hatena.service';

const myRoutes: Routes = [
  { path: '', component: MainComponent },
  { 
    path: 'hatena/:url',
    component: HatenaComponent,
    resolve: {
      hatena: HatenaResolver
    }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(myRoutes) ],
  exports: [ RouterModule ],
  providers: [ HatenaService, HatenaResolver ],
})
export class AppRoutingModule {}