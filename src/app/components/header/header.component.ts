import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  query: string = '';

  constructor(private router: Router) {}

  onSearchEnter(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.query = target.value.trim();
      if (this.query) {
        this.router.navigate(['/search'], { queryParams: { q: this.query } });
      }
    }
  }
}





