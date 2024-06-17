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
    const { name, subject, message } = this.contactForm;
    const recipientEmail = this.artisan.email;

    this.emailService.sendEmail(recipientEmail, subject, message).subscribe(response => {
      console.log('E-mail envoyé avec succès :', response);
      alert('E-mail envoyé avec succès !');
      this.resetForm(); // Réinitialiser le formulaire après l'envoi réussi
    }, error => {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      alert('Erreur lors de l\'envoi de l\'e-mail. Veuillez réessayer plus tard.');
    });
  }

  resetForm() {
    this.contactForm.name = '';
    this.contactForm.subject = '';
    this.contactForm.message = '';
  }
  sanitizeMapUrl(latitude: number, longitude: number): SafeResourceUrl {
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&amp;layer=mapnik`;
    console.log('Generated URL:', url); // Vérifiez l'URL générée
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}












