import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  artisansOfTheMonth: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      // Assuming your JSON has a key 'artisansOfTheMonth'
      this.artisansOfTheMonth = data.artisansOfTheMonth.slice(0, 3); // Get the first three artisans
    });
  }
}
