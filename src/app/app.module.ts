import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { PhotoPageComponent } from './core/pages/photo-page/photo-page.component';
import { FilterPageComponent } from './core/pages/filter-page/filter-page.component';
import { CreatePageComponent } from './core/pages/create-page/create-page.component';
import { AboutPageComponent } from './core/pages/about-page/about-page.component';
import { TestComponent } from './core/components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PhotoPageComponent,
    FilterPageComponent,
    CreatePageComponent,
    AboutPageComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
