import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './HomePage/HomePage.component.js';
import { DatabindingComponent } from './databinding/databinding.component';

@NgModule({
  declarations: [AppComponent, DatabindingComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
