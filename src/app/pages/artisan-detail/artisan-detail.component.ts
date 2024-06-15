import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-artisan-detail',
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.css']
})
export class ArtisanDetailComponent implements OnInit {
  artisan: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataService.getArtisanById(id).subscribe(data => {
        this.artisan = data;
      });
    }
  }
}











