import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  query: string = ''; // Terme de recherche

  constructor(private router: Router) {}

  // Méthode pour gérer la recherche lorsque la touche Entrée est enfoncée
  onSearchEnter(): void {
    if (this.query.trim()) {
      // Naviguer vers la nouvelle route avec le terme de recherche comme paramètre
      this.router.navigate(['/search-results'], { queryParams: { query: this.query } });
    }
  }
}











