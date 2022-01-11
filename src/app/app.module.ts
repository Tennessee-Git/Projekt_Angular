import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { ShowingsPageComponent } from './pages/showings-page/showings-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './components/movie components/movie-details/movie-details.component';
import { MovieControlsComponent } from './components/movie components/movie-controls/movie-controls.component';
import { EditMovieFormComponent } from './components/forms/edit-movie-form/edit-movie-form.component';
import { MovieListComponent } from './components/movie components/movie-list/movie-list.component';
import { ShowingListComponent } from './components/showing components/showing-list/showing-list.component';
import { ShowingDetailsComponent } from './components/showing components/showing-details/showing-details.component';
import { EditShowingFormComponent } from './components/forms/edit-showing-form/edit-showing-form.component';
import { AddMovieFormComponent } from './components/forms/add-movie-form/add-movie-form.component';
import { AddShowingFormComponent } from './components/forms/add-showing-form/add-showing-form.component';
import { ReservationFormComponent } from './components/forms/reservation-form/reservation-form.component';
import { RoomComponent } from './components/room/room.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    MoviesPageComponent,
    ShowingsPageComponent,
    MovieDetailsComponent,
    MovieControlsComponent,
    EditMovieFormComponent,
    MovieListComponent,
    ShowingListComponent,
    ShowingDetailsComponent,
    EditShowingFormComponent,
    AddMovieFormComponent,
    AddShowingFormComponent,
    ReservationFormComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
