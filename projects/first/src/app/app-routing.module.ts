import { PageThirdComponent } from './page-third/page-third.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'page-third',
    component: PageThirdComponent
  },
  {
    path: 'child',
    loadChildren: () =>
      import('./../../../child/src/app/app.module').then(m => m.AppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
