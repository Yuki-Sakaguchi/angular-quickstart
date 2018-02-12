import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { MainComponent }  from './main.component';
import { ExampleComponent } from './example.component';
import { ErrorComponent } from './error.component';
import { ParamComponent } from './param.component';

const myRoutes = [
  { path: 'param', component: ParamComponent },
  { path: 'exam', component: ExampleComponent },
  { path: '', component: MainComponent },
  { path: '**', component: ErrorComponent },
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
