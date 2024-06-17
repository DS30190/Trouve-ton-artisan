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
    console.log('Generated URL:', url); // Vérifiez l'URL générée
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
}







