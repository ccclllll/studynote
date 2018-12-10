import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FrontEndRoutingModule} from "./front-end.routers";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    FrontEndRoutingModule,
  ],
})
export class FrontEndModule {
}
