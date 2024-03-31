import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  private apiKey: string = 'k_o37guv05';
  baseUrl: string = 'http://localhost:3000/items';
  
  baseUrlPoster: string = `https://imdb-api.com/en/API/Posters/${this.apiKey}/`;

  constructor() { }

}
