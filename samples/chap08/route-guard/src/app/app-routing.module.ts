import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent }  from './main.component';
import { ArticleComponent } from './article.component';
import { TimeGuard } from './time.guard';

const myRoutes = [
  { path: '', component: MainComponent },
  {
    path: 'article/:id',
    component: ArticleComponent,
    canActivate: [ TimeGuard ],
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(myRoutes) ],
  providers: [ TimeGuard ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
