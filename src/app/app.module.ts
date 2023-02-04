import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { SolarsystemComponent } from './solarsystem/solarsystem.component';
import { HeaderComponent } from './header/header.component';
import { PlanetComponent } from './planet/planet.component';
import { SinglePlanetComponent } from './single-planet/single-planet.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    SolarsystemComponent,
    HeaderComponent,
    PlanetComponent,
    SinglePlanetComponent,
    CreditsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
