import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Movie } from '../models/Movie';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Showing } from '../models/Showing';
import { Room } from '../models/Rooms';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private URL!: string;

  constructor(private http : HttpClient) {
    this.URL = 'http://localhost:3006';
   }

  //GET -------------------------------------------
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.URL+'/filmy')
    .pipe(catchError(this.handleError));
  }

  getMovieById(id:number): Observable<Movie> {
    return this.http.get<Movie>(this.URL + '/filmy/' + id)
    .pipe(catchError(this.handleError));
  }

  getShowings(): Observable<Showing[]> {
    return this.http.get<Showing[]>(this.URL + '/seanse')
    .pipe(catchError(this.handleError));
  }

  // getShowingsNow(): Observable<Showing[]> {

  // }

  getShowingById(id:number): Observable<Showing> {
    return this.http.get<Showing>(this.URL + '/seanse/' + id)
    .pipe(catchError(this.handleError));
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.URL + '/sale')
    .pipe(catchError(this.handleError));
  }

  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(this.URL + '/sale/' + id)
    .pipe(catchError(this.handleError));
  }

  //POST -------------------------------------------
  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.URL + '/filmy', newMovie)
    .pipe(catchError(this.handleError));
  }

  addShowing(newShowing: Showing): Observable<Showing> {
    return this.http.post<Showing>(this.URL + '/seanse', newShowing)
    .pipe(catchError(this.handleError));
  }

  addReservation(newReservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.URL + '/rezerwacje', newReservation)
    .pipe(catchError(this.handleError));
  }

  //DELETE -------------------------------------------
  deleteMovie(id:number): Observable<any>{
    return this.http.delete(this.URL + '/filmy/' + id)
    .pipe(catchError(this.handleError));
  }

  //PUT -------------------------------------------


  //ERROR -----------------------------------------
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error: ', error.error.message);
    }
    else{
      console.error(`Backend return code ${error.status}, ` + `body was ${error.error}`);
    }
    return throwError('Something bad happened. Try later!');
  }
}
