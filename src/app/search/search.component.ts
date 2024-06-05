import { Component } from '@angular/core';

import { ArtisanService } from '../artisan.service';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artisans$: Observable<any[]> = EMPTY;
  query: string = '';

  constructor(private artisanService: ArtisanService) { }

  onSearch(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.query = target.value.trim();  // Nettoyer les espaces avant/après
      this.artisans$ = this.artisanService.searchArtisans(this.query);
    }
  }
}

