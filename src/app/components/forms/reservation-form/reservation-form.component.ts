import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/API/api.service';
import { CommunicatorService } from 'src/app/API/communicator.service';
import { Reservation } from 'src/app/models/Reservation';
import { Room } from 'src/app/models/Rooms';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['../form-components.css']
})
export class ReservationFormComponent implements OnInit {
  selectedSeat: string = "";
  id : number = -1;
  showing !: Showing;
  movieTitle !: string;
  roomId !: number;
  date !: string;
  capacity !: number;
  seatsTaken !: string[];

  constructor(
    private route: ActivatedRoute,
    private api: APIService,
    private com: CommunicatorService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = Number(params.get('id')));
    this.api.getShowingById(this.id).subscribe((data) => {
      this.showing = data;
      this.date = this.showing.date;
      this.movieTitle = this.showing.movieTitle;
      this.roomId = this.showing.roomId;
      this.seatsTaken = this.showing.seatsTaken;
      this.api.getRoomById(this.roomId).subscribe((response) => {
        var room = response;
        this.capacity = room.capacity;
      });
    });

  }

  handleSubmit(formValues:Reservation){
    console.log(formValues);

    this.router.navigate(['/Seanse']);
  }

  setSelectedSeat =(seatCode: string) : void => {
    this.selectedSeat = seatCode;
  }
}
