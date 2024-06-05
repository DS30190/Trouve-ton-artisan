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
  
    onSearch(event: Event): void {
      const target = event.target as HTMLInputElement;
      this.artisans$ = this.artisanService.searchArtisans(target.value);
    }
}



