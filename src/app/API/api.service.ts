import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Movie } from '../models/Movie';
import { Observable } from 'rxjs';
import { Showing } from '../models/Showing';
import { Room } from '../models/Rooms';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  URL!: string;

  constructor(private http : HttpClient) {
    this.URL = 'http://localhost:3006';
   }

  //GET -------------------------------------------
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.URL+'/filmy');
  }

  getMovieById(id:number): Observable<Movie> {
    return this.http.get<Movie>(this.URL + '/filmy/' + id);
  }

  getShowings() {
    return this.http.get<Showing[]>(this.URL + '/seanse');
  }

  getShowingById(id:number): Observable<Showing> {
    return this.http.get<Showing>(this.URL + '/seanse/' + id);
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.URL + '/sale');
  }

  //POST -------------------------------------------
  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.URL + '/filmy', newMovie);
  }

  addShowing(newShowing: Showing): Observable<Showing> {
    return this.http.post<Showing>(this.URL + '/seanse', newShowing);
  }

  addReservation(newReservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.URL + '/rezerwacje', newReservation);
  }

  //DELETE -------------------------------------------
  deleteMovie(id:number){
    this.http.delete(this.URL + '/filmy/' + id)
  }

  //PUT -------------------------------------------

}
