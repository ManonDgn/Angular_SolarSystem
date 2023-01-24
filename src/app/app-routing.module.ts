import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanetComponent } from './planet/planet.component';
import { SolarsystemComponent } from './solarsystem/solarsystem.component';

// Route 1 = Loader + Home
// Route 2 = 
// Route 3 = Erreur 404
const routes: Routes = [
  { path: '', component: LoaderComponent},
  { path: 'solarsystem', component: SolarsystemComponent},
  { path: 'solarsystem/:id', component: PlanetComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
