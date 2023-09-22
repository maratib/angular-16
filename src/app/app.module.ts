import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PagesComponent } from './pages/pages.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutComponent,
    PagesComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
