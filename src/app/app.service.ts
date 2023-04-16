import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable, of } from 'rxjs';
import { CardsResponse } from 'src/types/card.interface';
const mockRes = require('../assets/mock/apiAllCardsRes.json');

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.pokemontcg.io/v2';

  getCards(): Observable<CardsResponse> {
    if (environment.production) {
      return this.http.get(
        `${this.baseUrl}/cards`
      ) as Observable<CardsResponse>;
    }
    return of(mockRes);
  }
}
