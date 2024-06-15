import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanDetailComponent } from './pages/artisan-detail/artisan-detail.component';
import { ArtisanListComponent } from './pages/artisan-list/artisan-list.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { BuildingArtisansComponent } from './pages/building-artisans/building-artisans.component';
import { ServicesArtisansComponent } from './pages/services-artisans/services-artisans.component';
import { FabricationArtisansComponent } from './pages/fabrication-artisans/fabrication-artisans.component';
import { FoodArtisansComponent } from './pages/food-artisans/food-artisans.component';
import { LegalNoticesComponent } from './legal-notices/legal-notices.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { CookiesComponent } from './cookies/cookies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artisans', component: ArtisanListComponent},
  { path: 'erreur', component: ErreurComponent },
  { path: 'building-artisans', component: BuildingArtisansComponent }, 
  { path: 'services-artisans', component: ServicesArtisansComponent },
  { path: 'fabrication-artisans', component: FabricationArtisansComponent },
  { path: 'food-artisans', component: FoodArtisansComponent },
  { path: 'artisan', component: ArtisanDetailComponent},
  { path: 'legal-notices', component: LegalNoticesComponent },
  { path: 'personal-data', component: PersonalDataComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'artisan-detail/:id', component: ArtisanDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
