import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisanService } from '../../artisan.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  artisans$: Observable<any[]>;
  query: string = ''; // Déclaration de la propriété query

  constructor(private artisanService: ArtisanService) {
    this.artisans$ = new Observable<any[]>(); // Initialisation vide, à adapter selon votre logique
  }

  // Fonction pour gérer l'événement de recherche
  onSearch(query: string): void {
    if (query.trim()) {
      this.artisans$ = this.artisanService.searchArtisans(query);
    } else {
      this.artisans$ = new Observable<any[]>(); // Réinitialisation vide si la recherche est vide
    }
  }

  // Fonction pour gérer l'événement lorsque la touche Entrée est enfoncée
  onSearchEnter(): void {
    if (this.query.trim()) {
      this.artisans$ = this.artisanService.searchArtisans(this.query);
    } else {
      this.artisans$ = new Observable<any[]>(); // Réinitialisation vide si la recherche est vide
    }
  }
}









