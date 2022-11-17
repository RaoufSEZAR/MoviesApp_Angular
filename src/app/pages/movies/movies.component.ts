import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

//@ts-ignore
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;
  page: number = 1;
  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.pipe(take(1)).subscribe(({ genreId }) => {
      this.genreId = genreId;
      genreId
        ? this.getMoviesByGeners(this.page, genreId)
        : this.getPagedMovies(this.page);
    });
  }
  getPagedMovies(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  getMoviesByGeners(page: number, genreId: string) {
    this.moviesService.getMoviesByGeners(page, genreId).subscribe((movies) => {
      this.movies = movies;
    });
  }
  paginate(event: any) {
    this.genreId
      ? this.getMoviesByGeners(event.page + 1, this.genreId)
      : this.getPagedMovies(event.page + 1);
  }
}
