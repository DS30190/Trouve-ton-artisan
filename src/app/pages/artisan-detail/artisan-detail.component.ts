import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { EmailService } from '../../email.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-artisan-detail',
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.css']
})
export class ArtisanDetailComponent implements OnInit {
  artisan: any;
  contactForm = {
    name: '',
    subject: '',
    message: ''
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private emailService: EmailService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataService.getArtisanById(id).subscribe(data => {
        this.artisan = data;
      });
    }
  }

  submitForm() {
    window.alert('Votre mail a bien été envoyé !');

    this.contactForm = {
      name: '',
      subject: '',
      message: ''
    };
  }

  resetForm() {
    this.contactForm.name = '';
    this.contactForm.subject = '';
    this.contactForm.message = '';
  }
  sanitizeMapUrl(latitude: number, longitude: number): SafeResourceUrl {
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&amp;layer=mapnik`;
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}












