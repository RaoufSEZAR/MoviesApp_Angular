// @ts-ignore

import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../models/movie';
import { Tv } from './../../models/tv';
// @ts-ignore

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  popularTvShows: Tv[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((res) => {
      this.popularMovies = res;
    });
    this.moviesService.getMovies('top_rated').subscribe((res) => {
      this.topRatedMovies = res;
    });
    this.moviesService.getMovies('upcoming').subscribe((res) => {
      this.upcomingMovies = res;
    });
    this.moviesService.getTvs('popular', 1).subscribe((tvShows) => {
      this.popularTvShows = tvShows;
    });
  }
}
