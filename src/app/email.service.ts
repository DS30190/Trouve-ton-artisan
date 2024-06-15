import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private mailDevUrl = 'http://localhost:1080/email'; // L'URL où MailDev reçoit les e-mails

  constructor(private http: HttpClient) { }

  sendEmail(recipient: string, subject: string, message: string) {
    const body = {
      from: 'yourapp@example.com', // Adresse e-mail fictive de votre application
      to: recipient,
      subject,
      text: message
    };
    return this.http.post(this.mailDevUrl, body);
  }
}

