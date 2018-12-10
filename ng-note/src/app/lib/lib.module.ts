import {NgModule} from "@angular/core";
import {AppMenuComponent} from "./app-menu/app-menu.component";

@NgModule({
  declarations:[
    AppMenuComponent
  ],
  exports: [
    AppMenuComponent
  ]
})
export class LibModule {

}
