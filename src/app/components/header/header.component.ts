import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  query: string = ''; 
  isCollapsed = true; 

  constructor(private router: Router) {}

  
  onSearchEnter(): void {
    if (this.query.trim()) {
      
      this.router.navigate(['/search-results'], { queryParams: { query: this.query } });
    }
  }

  toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}












