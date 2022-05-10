import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMovieFormComponent } from './components/forms/edit-movie-form/edit-movie-form.component';
import { EditShowingFormComponent } from './components/forms/edit-showing-form/edit-showing-form.component';
import { ReservationFormComponent } from './components/forms/reservation-form/reservation-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';
import { ShowingsPageComponent } from './pages/showings-page/showings-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'Filmy', component: MoviesPageComponent},
  { path: 'Seanse', component: ShowingsPageComponent},
  { path: 'Sale', component:RoomsPageComponent},
  { path: 'EdytujFilm/:id', component: EditMovieFormComponent},
  { path: 'EdytujSeans/:id', component: EditShowingFormComponent},
  { path: 'Rezerwuj/:id', component: ReservationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
