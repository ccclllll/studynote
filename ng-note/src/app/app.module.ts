import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Css3PropertyComponent } from './modules/front-end/css3/1 css3-property/css3-property/css3-property.component';
import {RoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,

    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
