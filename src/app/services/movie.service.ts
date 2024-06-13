import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'a179d384de013110e6162be1c3044222';

  constructor(private http: HttpClient) { }

  getNowPlaying(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}`);
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
}
