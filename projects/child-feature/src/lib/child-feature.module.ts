import { PageOneComponent } from './page-one/page-one.component';
import { ChildFeatureRoutingModule } from './child-feature-routing.module';
import { NgModule } from '@angular/core';
import { ChildFeatureComponent } from './child-feature.component';
import { PageTwoComponent } from './page-two/page-two.component';



@NgModule({
  declarations: [
    ChildFeatureComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    ChildFeatureRoutingModule
  ],
  exports: [ChildFeatureComponent]
})
export class ChildFeatureModule { }
