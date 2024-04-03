import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImdbMovieModel } from './imdb-Movie.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  private apiKey: string = 'k_o37guv05';
  baseUrl: string = 'http://localhost:3000/items';
  
  baseUrlPoster: string = `https://imdb-api.com/en/API/Posters/${this.apiKey}/`;

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<ImdbMovieModel[]> {
    return this.httpClient.get<ImdbMovieModel[]>(this.baseUrl);
  }
  getPosters(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrlPoster + id);
  }

}

// concluído até criando o service
