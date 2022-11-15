import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { Tv } from './../../models/tv';

//@ts-ignore
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss'],
})
export class TvshowsComponent implements OnInit {
  movies: Tv[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getTvs('top_rated', 20).subscribe((movies) => {
      this.movies = movies;
    });
  }
}
