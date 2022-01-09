import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() capacity !: number;
  @Input() seatsTaken !: string[];
  @Input() setSelectedSeat!: (seatCode: string) => void;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(key: string) {
    this.setSelectedSeat(key);
  }


}
