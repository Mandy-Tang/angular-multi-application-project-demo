import { ChildFeatureComponent } from './child-feature.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  {
    path: '',
    component: ChildFeatureComponent,
    children: [
      {
        path: "page-one",
        component: PageOneComponent
      },
      {
        path: "page-two",
        component: PageTwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildFeatureRoutingModule {}
