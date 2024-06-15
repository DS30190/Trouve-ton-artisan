import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { EmailService } from '../../email.service';

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
    private emailService: EmailService
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
}












