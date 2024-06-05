import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisanService } from '../../artisan.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  artisans$!: Observable<any[]>;

  constructor(private artisanService: ArtisanService) {}

  // Fonction pour gérer l'événement d'entrée de texte dans la barre de recherche
  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const query = target.value.trim();
      if (query) {
        this.artisans$ = this.artisanService.searchArtisans(query);
      }
    }
  }

  // Fonction pour gérer l'événement lorsqu'une touche est enfoncée (recherche lorsque la touche Entrée est enfoncée)
  onSearchEnter(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    const target = keyboardEvent.target as HTMLInputElement;
    if (target) {
      const query = target.value.trim();
      if (query) {
        this.artisans$ = this.artisanService.searchArtisans(query);
      }
    }
  }
}  

