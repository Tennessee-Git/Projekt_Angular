import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  URL!: string;

  constructor(private http : HttpClient) {
    this.URL = 'http://localhost:3006';
   }

  //GET
  getMovies() {
    return this.http.get(this.URL+'/filmy');
  }

  getMovieById(id:number) {
    this.http.get(this.URL + '/filmy/' + id);
  }

  getShowings() {

  }

  getShowingById(id:number) {
    this.http.get(this.URL + '/seanse/' + id);
  }

  getRooms() {

  }
  //POST

  //DELETE

  //PUT
}
