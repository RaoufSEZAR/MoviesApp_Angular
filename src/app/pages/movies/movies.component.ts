import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../models/movie';

//@ts-ignore
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  page: number = 1;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPagedMovies(this.page);
  }
  getPagedMovies(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  paginate(event: any) {
    this.getPagedMovies(event.page + 1);
  }
}
