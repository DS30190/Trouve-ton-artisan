import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artisansOfTheMonth: any[] = [];

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.dataService.getArtisansOfTheMonth().subscribe(data => {
      this.artisansOfTheMonth = data;
      console.log('Artisans of the month:', this.artisansOfTheMonth);
    });
  }

  sanitizeMapUrl(latitude: number, longitude: number): SafeResourceUrl {
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&amp;layer=mapnik`;
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
  getStarClasses(note: number): string[] {
    const starClasses = [];
    const fullStars = Math.floor(note);
    const remainingStars = note - fullStars;
    const hasHalfStar = remainingStars >= 0.5;
    const hasQuarterStar = remainingStars >= 0.25 && remainingStars < 0.75;
  
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starClasses.push('fa fa-star');
      } else if (hasHalfStar && i === fullStars) {
        starClasses.push('fa fa-star-half-o');
      } else if (hasQuarterStar && i === fullStars) {
        starClasses.push('fa fa-star-quarter-o');
      } else {
        starClasses.push('fa fa-star-o');
      }
    }
  
    return starClasses;
  }
  
}







