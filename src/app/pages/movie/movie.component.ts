import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import {
  Movie,
  MovieImages,
  MovieVideo,
  MovieCredits,
} from './../../models/movie';
import { IMAGES_SIZES } from './../../constants/images-sizes';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: any;
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  simmovies: any;
  imagesSizes = IMAGES_SIZES;
  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe(({ movieId }) => {
      this.getMovieInfo(movieId);
      this.getMovieVideos(movieId);
      this.getMovieImages(movieId);
      this.getMovieCredits(movieId);
      this.getsimmovies(movieId);
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
  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((movieImages) => {
      this.movieImages = movieImages;
    });
  }
  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCredits) => {
      this.movieCredits = movieCredits;
    });
  }
  getsimmovies(id: string) {
    this.moviesService.getsimmovies(id, 6).subscribe((listsimmovies) => {
      this.simmovies = listsimmovies;
    });
  }
}
