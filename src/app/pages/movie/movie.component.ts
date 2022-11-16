import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Movie, MovieVideo } from './../../models/movie';
import { IMAGES_SIZES } from './../../constants/images-sizes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: any;
  imagesSizes = IMAGES_SIZES;
  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe(({ movieId }) => {
      this.getMovieInfo(movieId);
      this.getMovieVideos(movieId);
    });
  }
  getMovieInfo(id: string) {
    this.moviesService.getMovieById(id).subscribe((movieInfo) => {
      this.movie = movieInfo;
    });
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideos) => {
      this.movieVideos = movieVideos;
    });
  }
}
