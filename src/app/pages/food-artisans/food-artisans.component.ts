import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-food-artisans',
  templateUrl: './food-artisans.component.html',
  styleUrls: ['./food-artisans.component.css']
})
export class FoodArtisansComponent implements OnInit {
  artisans: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.artisans = data.filter((artisan: any) => artisan.category === 'Alimentation');
    });
  }
}

