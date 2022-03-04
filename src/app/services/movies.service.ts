import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/550?api_key=fc506153a253a96abde72b4cc99b58a9'
    );
  }
}