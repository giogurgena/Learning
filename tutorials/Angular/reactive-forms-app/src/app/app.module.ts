import { SignupFormComponent } from './signup-form/signup-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
