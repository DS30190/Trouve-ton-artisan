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
    this.dataService.getData().subscribe(data => {
      console.log('Data received:', data); // Log the entire response
      if (Array.isArray(data)) {
        this.artisansOfTheMonth = data.slice(0, 3); // Get the first three artisans
      } else {
        console.error('Unexpected data format:', data);
      }
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
}


