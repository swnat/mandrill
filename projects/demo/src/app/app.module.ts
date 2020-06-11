import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwnatMandrillModule } from '../../../swnat-mandrill/src/lib/swnat-mandrill.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwnatMandrillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
