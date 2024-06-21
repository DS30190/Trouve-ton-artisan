import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private mailDevUrl = 'http://localhost:1080/email';  

  constructor(private http: HttpClient) { }

  sendEmail(recipient: string, subject: string, message: string) {
    const body = {
      from: 'yourapp@example.com', 
      to: recipient,
      subject,
      text: message
    };
    return this.http.post(this.mailDevUrl, body);
  }
}

