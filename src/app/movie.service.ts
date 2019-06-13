import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9d4ebe256c5436e943d49acc5183f574');
  }
}
