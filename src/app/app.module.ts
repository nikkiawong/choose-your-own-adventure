import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CharacterStartComponent } from './character-start/character-start.component';
import { CalpysoComponent } from './calpyso/calpyso.component';
import { IdentityComponent } from './identity/identity.component';
import { IslandComponent } from './island/island.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterStartComponent,
    CalpysoComponent,
    IdentityComponent,
    IslandComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
