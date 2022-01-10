import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/API/api.service';
import { Room } from 'src/app/models/Rooms';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  selectedSeat: string = "";
  id : number = -1;
  showing!: Showing;
  movieTitle !: string;
  roomId !: number;
  date !: string;
  capacity !: number;
  seatsTaken !: string[];

  constructor(private route: ActivatedRoute, private api: APIService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = Number(params.get('id')));
    this.api.getShowingById(this.id).subscribe((data) => {
      this.showing = data;
      this.date = this.showing.Date;
      console.log(this.showing);
      this.movieTitle = this.showing.MovieTitle;
      this.roomId = this.showing.RoomId;
      this.seatsTaken = this.showing.SeatsTaken;
      console.log("test");
      this.api.getRoomById(this.roomId).subscribe((response) => { // do poprawy
        var room = response;
        this.capacity = room.capacity;
      });
    });

  }

  handleSubmit():void{
    console.log("Reservation");
  }

  setSelectedSeat =(seatCode: string) : void => {
    this.selectedSeat = seatCode;
  }
}
