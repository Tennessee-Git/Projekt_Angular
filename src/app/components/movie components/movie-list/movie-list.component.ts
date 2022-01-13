import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/API/api.service';
import { CommunicatorService } from 'src/app/API/communicator.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['../movie-components.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies !: Movie[];
  subscription!: Subscription;
  constructor(private api: APIService, private com: CommunicatorService) { }

  ngOnInit(): void {
    this.getMovies();
    this.subscription = this.com.message$.subscribe((message) =>{
      if(message == "reloadMovie")
        this.getMovies();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getMovies(){
    this.api.getMovies().subscribe((data) => {
      this.movies = data;
      console.log(data); });
  }

  delete = (id: number) : void => {
    console.log(`Delete ${id} from movie list`);
    this.api.deleteMovie(id).subscribe((response) => { this.getMovies() });
  }
}
