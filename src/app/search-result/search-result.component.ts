import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../artisan.service'; // Importez votre service d'artisans
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  artisans$: Observable<any[]>; // Observable pour stocker les résultats de recherche

  constructor(private route: ActivatedRoute, private artisanService: ArtisanService) {
    this.artisans$ = new Observable<any[]>(); // Initialisez l'observable vide
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['query']; // Récupérez le terme de recherche depuis les paramètres d'URL
      if (query) {
        this.artisans$ = this.artisanService.searchArtisans(query); // Recherchez les artisans selon le terme de recherche
      } else {
        this.artisans$ = new Observable<any[]>(); // Réinitialisez l'observable si aucun terme de recherche n'est fourni
      }
    });
  }
}

