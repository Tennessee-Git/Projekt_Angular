import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API/api.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  // singleMovie!: Movie;
  constructor(
    //private api: APIService
    ) { }

  ngOnInit(): void {
    // this.api.getMovieById(1).subscribe(result => this.singleMovie = result);
  }

}
