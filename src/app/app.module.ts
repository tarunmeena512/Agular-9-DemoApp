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
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  
  declarations: [
    AppComponent,
    LandingComponent,
    DialogOverviewExampleDialogComponent,
    FormComponent,
    LoginComponent
 
  ],
  entryComponents:[DialogOverviewExampleDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
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