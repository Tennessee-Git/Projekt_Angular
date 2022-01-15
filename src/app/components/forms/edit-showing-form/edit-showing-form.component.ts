import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/API/api.service';
import { Movie } from 'src/app/models/Movie';
import { Room } from 'src/app/models/Rooms';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'app-edit-showing-form',
  templateUrl: './edit-showing-form.component.html',
  styleUrls: ['../form-components.css']
})
export class EditShowingFormComponent implements OnInit {
  id: number = -1;
  showing!: Showing;
  movies!: Movie[];
  rooms!: Room[];

  constructor(
    private route: ActivatedRoute,
    private api: APIService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.api.getShowingById(this.id).subscribe((response)=> this.showing = response);
    });
    this.api.getMovies().subscribe((response) => {
      this.movies = response;
    });
    this.api.getRooms().subscribe((response) => {
      this.rooms = response;
    })
  }

  handleSubmit(formValues: Showing){
    console.log(formValues);
    this.showing.date = "";
    this.showing.movieId = formValues.movieId;
    this.showing.roomId = formValues.roomId;
    this.showing.movieTitle = String(this.movies.find(((movie) => movie.id === formValues.movieId))?.title);
    console.log(this.showing);
    // this.api.editShowing(this.showing, this.id).subscribe((response)=> {
    //   console.log(response);
    //   this.router.navigate(['/Seanse']);
    // });
  }
}
