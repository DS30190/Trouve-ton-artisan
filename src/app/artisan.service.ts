// artisan.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  private jsonUrl = 'assets/datas.json'; // Assurez-vous que le chemin est correct

  constructor(private http: HttpClient) { }

  getArtisans(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      catchError((error: any): Observable<any[]> => {
        console.error('Error loading artisans', error);
        return of([]);
      })
    );
  }

  searchArtisans(query: string): Observable<any[]> {
    if (!query) {
      return this.getArtisans(); // Si aucune requête n'est entrée, retourner tous les artisans
    }
    return this.getArtisans().pipe(
      map(artisans => artisans.filter(artisan =>
        artisan.name.toLowerCase().includes(query.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(query.toLowerCase()) ||
        artisan.location.toLowerCase().includes(query.toLowerCase())
      ))
    );
  }

  getArtisansOfTheMonth(): Observable<any[]> {
    const artisansOfTheMonth = [
      { name: 'Artisan A', rating: 5, specialty: 'Plomberie', location: 'Paris' },
      { name: 'Artisan B', rating: 4, specialty: 'Électricité', location: 'Lyon' },
      { name: 'Artisan C', rating: 4, specialty: 'Menuiserie', location: 'Marseille' }
    ];
    return of(artisansOfTheMonth);
  }

}
