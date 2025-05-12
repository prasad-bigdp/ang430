import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrasadPipe } from './prasad.pipe';
import { ChangeFontPipe } from './change-font.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrasadPipe,
    ChangeFontPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
