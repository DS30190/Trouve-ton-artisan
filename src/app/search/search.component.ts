import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../artisan.service';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artisans$: Observable<any[]> = EMPTY;
  query: string = '';

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      if (this.query) {
        this.artisans$ = this.artisanService.searchArtisans(this.query);
      }
    });
  }
}


