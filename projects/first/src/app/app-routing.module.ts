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
      import('../../../child-feature/src/lib/child-feature.module').then(m => m.ChildFeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
