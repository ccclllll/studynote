import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const _routes: Routes = [
  {
    path: 'front',
    loadChildren: './modules/front-end/front-end.module#FrontEndModule',
    //canActivate: [PublicGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(_routes)]
})
export class RoutingModule {
}
