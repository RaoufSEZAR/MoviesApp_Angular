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
  page: number = 1;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPagedMovies(this.page);
  }
  getPagedMovies(page: number) {
    this.moviesService.getTvs('top_rated', page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  paginate(event: any) {
    this.getPagedMovies(event.page + 1);
  }
}
