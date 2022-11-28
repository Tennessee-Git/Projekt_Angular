import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/API/api.service';
import { Movie } from 'src/app/models/Movie';
import { Room } from 'src/app/models/Rooms';
import { Showing } from 'src/app/models/Showing';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-showing-form',
  templateUrl: './edit-showing-form.component.html',
  styleUrls: ['../form-components.css'],
})
export class EditShowingFormComponent implements OnInit {
  id: number = -1;
  showing!: Showing;
  movies!: Movie[];
  rooms!: Room[];
  minDate!: string;

  constructor(
    private route: ActivatedRoute,
    private api: APIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.api
        .getShowingById(this.id)
        .subscribe((response) => (this.showing = response));
    });
    this.api.getMovies().subscribe((response) => {
      this.movies = response;
    });
    this.api.getRooms().subscribe((response) => {
      this.rooms = response;
    });
    let date = moment().format('YYYY-MM-DDTHH:mm');
    this.minDate = date;
  }

  handleSubmit(formValues: Showing) {
    let updatedshowing = JSON.parse(JSON.stringify(this.showing));
    updatedshowing.date =
      formValues.date !== '' &&
      formValues.date !== 'Invalid date' &&
      formValues.date !== updatedshowing.date
        ? moment(formValues.date).format('DD-MM-YYYY HH:mm')
        : this.showing.date;
    updatedshowing.movieId =
      formValues.movieId !== updatedshowing.movieId && formValues.movieId > 0
        ? formValues.movieId
        : this.showing.movieId;
    updatedshowing.roomId =
      formValues.roomId !== updatedshowing.roomId && formValues.roomId > 0
        ? formValues.roomId
        : this.showing.roomId;
    updatedshowing.movieTitle =
      formValues.movieId !== this.showing.movieId && formValues.movieId > 0
        ? this.movies.find((movie) => movie.id === formValues.movieId)?.title
        : this.showing.movieTitle;
    updatedshowing.availableSeats =
      formValues.roomId !== this.showing.roomId && formValues.roomId > 0
        ? this.rooms.find((room) => room.id === formValues.roomId)!.capacity
        : this.showing.availableSeats;
    updatedshowing.seatsTaken =
      formValues.roomId !== this.showing.roomId && formValues.roomId > 0
        ? []
        : this.showing.seatsTaken;
    console.log(updatedshowing);
    this.api.editShowing(updatedshowing, this.id).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/Seanse']);
    });
  }
}
