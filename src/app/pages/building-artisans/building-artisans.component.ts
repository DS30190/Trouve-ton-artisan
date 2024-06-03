import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-building-artisans',
  templateUrl: './building-artisans.component.html',
  styleUrls: ['./building-artisans.component.css']
})
export class BuildingArtisansComponent implements OnInit {
  artisans: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.artisans = data.filter((artisan: any) => artisan.category === 'Bâtiment');
    });
  }
}
