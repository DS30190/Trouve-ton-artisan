import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/datas.json'; // URL vers votre fichier JSON, à adapter si nécessaire

  constructor(private http: HttpClient) {}

  public getData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  public getArtisansOfTheMonth(): Observable<any[]> {
    return this.getData().pipe(
      map((artisans: any[]) => artisans.filter(artisan => artisan.top)),
      map((filteredArtisans: any[]) => {
        return filteredArtisans.map(artisan => ({
          ...artisan,
          coordinates: {
            latitude: artisan.coordinates.latitude || 0,  // Assurez-vous que les coordonnées sont bien gérées
            longitude: artisan.coordinates.longitude || 0  // Assurez-vous que les coordonnées sont bien gérées
          }
        }));
      })
    );
  }

  public getArtisanById(id: string): Observable<any> {
    return this.getData().pipe(
      map((artisans: any[]) => artisans.find(artisan => artisan.id === id))
    );
  }
}






