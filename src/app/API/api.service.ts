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
    return this.http.get<Movie[]>(this.URL+'/movies')
    .pipe(catchError(this.handleError));
  }

  getMovieById(id:number): Observable<Movie> {
    return this.http.get<Movie>(this.URL + '/movies/' + id)
    .pipe(catchError(this.handleError));
  }

  getShowings(): Observable<Showing[]> {
    return this.http.get<Showing[]>(this.URL + '/showings')
    .pipe(catchError(this.handleError));
  }

  getShowingById(id:number): Observable<Showing> {
    return this.http.get<Showing>(this.URL + '/showings/' + id)
    .pipe(catchError(this.handleError));
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.URL + '/rooms')
    .pipe(catchError(this.handleError));
  }

  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(this.URL + '/rooms/' + id)
    .pipe(catchError(this.handleError));
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.URL + '/reservations')
    .pipe(catchError(this.handleError));
  }

  //POST -------------------------------------------
  addMovie(newMovie: object): Observable<Movie> {
    return this.http.post<Movie>(this.URL + '/movies', newMovie)
    .pipe(catchError(this.handleError));
  }

  addShowing(newShowing: object): Observable<Showing> {
    return this.http.post<Showing>(this.URL + '/showings', newShowing)
    .pipe(catchError(this.handleError));
  }

  addReservation(newReservation: object): Observable<Reservation> {
    return this.http.post<Reservation>(this.URL + '/reservations', newReservation)
    .pipe(catchError(this.handleError));
  }

  //DELETE -------------------------------------------
  deleteMovie(id:number): Observable<any>{
    return this.http.delete(this.URL + '/movies/' + id)
    .pipe(catchError(this.handleError));
  }

  //PUT -------------------------------------------
  editMovie(movie2Edit: object, id: number): Observable<object> {
    return this.http.put(this.URL + '/movies/' + id, movie2Edit)
      .pipe(catchError(this.handleError));
  }

  editShowing(showing2Edit: object, id: number): Observable<object> {
    return this.http.put(this.URL + '/showings/' + id, showing2Edit)
      .pipe(catchError(this.handleError));
    }

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
