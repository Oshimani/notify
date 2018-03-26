import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NotifyModule } from './notify/notify.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotifyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
