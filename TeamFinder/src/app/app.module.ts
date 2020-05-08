import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartyComponent } from './party/party.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PartyViewerComponent } from './nav-bar/party-viewer/party-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyComponent,
    NavBarComponent,
    PartyViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
