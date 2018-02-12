import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { MainComponent }  from './main.component';
import { ExampleComponent } from './example.component';
import { ErrorComponent } from './error.component';
import { SearchComponent } from './search.component';

const myRoutes = [
    { path: 'search',
      children: [
        { path:'**', component: SearchComponent }
      ]
  },
  { path: 'exam', component: ExampleComponent },
  { path: '', component: MainComponent },
  { path: '**', component: ErrorComponent },
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
