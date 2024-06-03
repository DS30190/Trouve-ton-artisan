import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-services-artisans',
  templateUrl: './services-artisans.component.html',
  styleUrls: ['./services-artisans.component.css']
})
export class ServicesArtisansComponent implements OnInit {
  artisans: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.artisans = data.filter((artisan: any) => artisan.category === 'Services');
    });
  }
}

