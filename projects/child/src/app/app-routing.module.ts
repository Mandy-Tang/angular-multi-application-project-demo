import { AppComponent } from './app.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageOneComponent } from "./page-one/page-one.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "page-one",
    component: PageOneComponent
  },
  {
    path: "page-two",
    component: PageTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
