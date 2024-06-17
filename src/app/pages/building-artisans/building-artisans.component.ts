import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-building-artisans',
  templateUrl: './building-artisans.component.html',
  styleUrls: ['./building-artisans.component.css']
})
export class BuildingArtisansComponent implements OnInit {
  artisans: any[] = [];

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.artisans = data.filter((artisan: any) => artisan.category === 'Bâtiment');
    });
  }
  sanitizeMapUrl(latitude: number, longitude: number): SafeResourceUrl {
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&amp;layer=mapnik`;
    console.log('Generated URL:', url); // Vérifiez l'URL générée
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
