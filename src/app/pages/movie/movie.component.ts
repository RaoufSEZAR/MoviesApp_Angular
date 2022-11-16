import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe(({ movieId }) => {
      this.getMovieInfo(movieId);
    });
  }
  getMovieInfo(id: string) {
    this.moviesService.getMovieById(id).subscribe((movieInfo) => {
      this.movie = movieInfo;
    });
  }
}