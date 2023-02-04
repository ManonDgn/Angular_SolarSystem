import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SinglePlanetComponent } from './single-planet/single-planet.component';
import { SolarsystemComponent } from './solarsystem/solarsystem.component';
import { CreditsComponent } from './credits/credits.component';

// Route '' = Loader + Home
// Route ** = Erreur 404
const routes: Routes = [
  { path: '', component: LoaderComponent},
  { path: 'solarsystem', component: SolarsystemComponent},
  { path: 'solarsystem/:id', component: SinglePlanetComponent},
  { path: 'credits', component: CreditsComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
