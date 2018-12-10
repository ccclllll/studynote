import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {Css3PropertyComponent} from "./1 css3-property/css3-property/css3-property.component";

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Css3PropertyComponent
    }])
  ],

  declarations:[
    Css3PropertyComponent,
  ]
})
export class Css3Module {
}


