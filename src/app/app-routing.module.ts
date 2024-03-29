import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { MovieComponent } from './pages/movie/movie.component';
import { GenresComponent } from './pages/genres/genres.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movie/:movieId',
    component: MovieComponent,
  },

  {
    path: 'movies/genres/:genreId',
    component: MoviesComponent,
  },
  {
    path: 'tvshows',
    component: TvshowsComponent,
  },
  {
    path: 'genres',
    component: GenresComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
