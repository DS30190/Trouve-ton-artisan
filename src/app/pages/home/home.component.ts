import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artisansOfTheMonth: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getArtisansOfTheMonth().subscribe(data => {
      this.artisansOfTheMonth = data;
    });
  }
}

