import {Component, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  moviesArray: any = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe(
        movie => {
          this.moviesArray = movie['results'];
          console.table(this.moviesArray);
        }
    );
  }


}
