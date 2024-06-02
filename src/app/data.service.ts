import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/data.json'; // Chemin vers votre fichier JSON dans le dossier assets

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}

