import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { MainComponent }  from './main.component';
import { ExampleComponent } from "./example.component";
import { ErrorComponent } from './error.component';
import { SearchComponent } from './search.componnet';

const myRoutes = [  
  { path: 'exam', component: ExampleComponent },
  { path: 'main', component: MainComponent },
  { path: 'search/:id', component: SearchComponent,
    outlet: 'other' },
  { path: '', redirectTo: '/main(other:search/Angular)',
    pathMatch: 'full' },
  { path: '**', component: ErrorComponent }, 

  //トップページを表示するだけの場合
  /*
  {
    path: '', children: [
      { path: '', component: MainComponent },
      { path: '', component: SearchComponent, outlet: 'other' }
    ]
  }
  */
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
