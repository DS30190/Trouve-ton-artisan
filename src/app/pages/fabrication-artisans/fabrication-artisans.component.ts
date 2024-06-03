import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-fabrication-artisans',
  templateUrl: './fabrication-artisans.component.html',
  styleUrls: ['./fabrication-artisans.component.css']
})
export class FabricationArtisansComponent implements OnInit {
  artisans: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.artisans = data.filter((artisan: any) => artisan.category === 'Fabrication');
    });
  }
}

