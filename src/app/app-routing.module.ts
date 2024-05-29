import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanDetailComponent } from './pages/artisan-detail/artisan-detail.component';
import { ArtisanListComponent } from './pages/artisan-list/artisan-list.component';
import { ErreurComponent } from './pages/erreur/erreur.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artisan/:id', component: ArtisanDetailComponent },
  { path: 'artisans', component: ArtisanListComponent},
  { path: 'erreur', component: ErreurComponent },
  { path: '**', redirectTo: '/erreur' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
