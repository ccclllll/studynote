import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const _routes: Routes = [
  {
    path: 'css3',
    loadChildren:'./css3/css3.module#Css3Module',
  }
];

@NgModule({
  imports: [RouterModule.forChild(_routes)],
  exports: [RouterModule]
})
export class FrontEndRoutingModule {
}
