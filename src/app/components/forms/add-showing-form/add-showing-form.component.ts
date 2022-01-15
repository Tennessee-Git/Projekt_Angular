import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { APIService } from 'src/app/API/api.service';
import { CommunicatorService } from 'src/app/API/communicator.service';
import { Movie } from 'src/app/models/Movie';
import { Room } from 'src/app/models/Rooms';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'app-add-showing-form',
  templateUrl: './add-showing-form.component.html',
  styleUrls: ['../form-components.css']
})
export class AddShowingFormComponent implements OnInit {
  movies!: Movie[];
  rooms!: Room[];
  minDate:Date = new Date();

  constructor(private dialogRef: MatDialogRef<AddShowingFormComponent>, private com: CommunicatorService, private api: APIService) { }

  ngOnInit(): void {
    this.api.getMovies().subscribe((response) => {
      this.movies = response;
    });
    this.api.getRooms().subscribe((response) => {
      this.rooms = response;
    })
  }

  handleSubmit(formValues: Showing){
    let newShowing = {
      date: formValues.date,
      movieId: formValues.movieId,
      roomId: formValues.roomId,
      movieTitle: this.movies.find((movie) => movie.id === formValues.movieId)?.title,
      availableSeats: this.rooms.find((room) => room.id === formValues.roomId)?.capacity,
      seatsTaken: []
    }
    console.log(newShowing);
    // this.api.addShowing(newShowing).subscribe((response) => {
    //   console.log(response);
    //   this.com.SendMessage("reloadShowing");
    // });
    this.dialogRef.close();
  }
}
