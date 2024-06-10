import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artisan-detail',
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.css']
})
export class ArtisanDetailComponent {
  @Input() name!: string;
  @Input() rating!: number;
  @Input() specialty!: string;
  @Input() location!: string;
}

