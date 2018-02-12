import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { MainComponent }  from './main.component';
import { ContentComponent } from './content.component';
import { ChildComponent } from './child.component';
import { ErrorComponent } from './error.component';

const myRoutes = [
  { path: 'contents/:id', component: ContentComponent, 
  //{ path: 'contents/:id', component: ContentComponent, pathMatch: 'full',
    children: [
      { path: 'pages/:page', component: ChildComponent }
    ]
  },
  { path: '', component: MainComponent },
  //{ path: '**', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
