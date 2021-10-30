import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgAbTelInputModule } from 'projects/ng-ab-tel-input/src/lib/ng-ab-tel-input.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAbTelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
