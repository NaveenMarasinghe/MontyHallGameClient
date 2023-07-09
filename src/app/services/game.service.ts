import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameCard } from '../interfaces/GameCard';
import { GameData } from '../interfaces/GameData';
import { CreateGame } from '../interfaces/CreateGame';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = 'https://localhost:44394/api/Game/';

  constructor(private http: HttpClient) {}

  runGame(gameId: number): Observable<GameData[]> {
    const url = `${this.apiUrl}RunGame/${gameId}`;
    return this.http.get<GameData[]>(url);
  }

  getGameCards(): Observable<GameCard[]> {
    const url = `${this.apiUrl}GetGameCards`;
    return this.http.get<GameCard[]>(url);
  }

  getGameCard(id: number): Observable<GameCard> {
    const url = `${this.apiUrl}GetGameCard/${id}`;
    return this.http.get<GameCard>(url);
  }

  getGameData(id: number): Observable<GameData[]> {
    const url = `${this.apiUrl}GetGameData/${id}`;
    return this.http.get<GameData[]>(url);
  }

  createGame(createGame: CreateGame): Observable<GameCard> {
    const url = `${this.apiUrl}CreateGame`;
    return this.http.post<GameCard>(url, createGame, httpOptions);
  }
}
