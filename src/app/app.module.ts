import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanDetailComponent } from './pages/artisan-detail/artisan-detail.component';
import { ArtisanListComponent } from './pages/artisan-list/artisan-list.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { BuildingArtisansComponent } from './pages/building-artisans/building-artisans.component';
import { ServicesArtisansComponent } from './pages/services-artisans/services-artisans.component';
import { FabricationArtisansComponent } from './pages/fabrication-artisans/fabrication-artisans.component';
import { FoodArtisansComponent } from './pages/food-artisans/food-artisans.component';
import { SearchComponent } from './search/search.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArtisanDetailComponent,
    ArtisanListComponent,
    ErreurComponent,
    BuildingArtisansComponent,
    ServicesArtisansComponent,
    FabricationArtisansComponent,
    FoodArtisansComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
