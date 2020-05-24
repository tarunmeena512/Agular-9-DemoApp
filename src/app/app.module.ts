import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { spinnerInterceptor } from './spinner-interceptor';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
  
  declarations: [
    AppComponent,
    LandingComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: spinnerInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));