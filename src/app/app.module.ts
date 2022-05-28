import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { ShowingsPageComponent } from './pages/showings-page/showings-page.component';
import { MovieListComponent } from './components/movie components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie components/movie-details/movie-details.component';
import { ShowingListComponent } from './components/showing components/showing-list/showing-list.component';
import { ShowingDetailsComponent } from './components/showing components/showing-details/showing-details.component';

import { HttpClientModule } from '@angular/common/http';
import { APIService } from './API/api.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMovieFormComponent } from './components/forms/edit-movie-form/edit-movie-form.component';
import { EditShowingFormComponent } from './components/forms/edit-showing-form/edit-showing-form.component';
import { AddMovieFormComponent } from './components/forms/add-movie-form/add-movie-form.component';
import { AddShowingFormComponent } from './components/forms/add-showing-form/add-showing-form.component';
import { ReservationFormComponent } from './components/forms/reservation-form/reservation-form.component';
import { RoomComponent } from './components/room/room.component';

import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxNativeDateModule } from '@angular-material-components/datetime-picker';
import { DateFilterPipe } from './Pipes/date-filter.pipe';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';
import { NgChartsModule } from 'ng2-charts';
import { PopularityChartComponent } from './components/chart/popularity-chart/popularity-chart.component';
import { PopularityTableComponent } from './components/table/popularity-table/popularity-table.component';
import { RoomListComponent } from './components/room components/room-list/room-list.component';
import { RoomDetailsComponent } from './components/room components/room-details/room-details.component';
import { AddRoomFormComponent } from './components/forms/add-room-form/add-room-form.component';
import { EditRoomFormComponent } from './components/forms/edit-room-form/edit-room-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    MoviesPageComponent,
    ShowingsPageComponent,
    MovieDetailsComponent,
    EditMovieFormComponent,
    MovieListComponent,
    ShowingListComponent,
    ShowingDetailsComponent,
    EditShowingFormComponent,
    AddMovieFormComponent,
    AddShowingFormComponent,
    ReservationFormComponent,
    RoomComponent,
    DateFilterPipe,
    RoomsPageComponent,
    PopularityChartComponent,
    PopularityTableComponent,
    RoomListComponent,
    RoomDetailsComponent,
    AddRoomFormComponent,
    EditRoomFormComponent
  ],
  entryComponents: [
    AddMovieFormComponent,
    AddShowingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxNativeDateModule,
    MatInputModule,
    NgChartsModule,
    MatTableModule
  ],
  providers: [
    APIService,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
