import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/datas.json'; 

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
  public getArtisansOfTheMonth(): Observable<any[]> {
    return this.getData().pipe(
      map((artisans: any[]) => artisans.filter(artisan => artisan.top === true))
    );
  }
  
}

