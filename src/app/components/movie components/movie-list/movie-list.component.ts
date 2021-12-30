import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/app/API/api.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['../movie-components.css']
})
export class MovieListComponent implements OnInit {
  movies !: Movie[];
  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.getMovies().subscribe(data => this.movies = data);
    console.log(this.movies);
  }

}
