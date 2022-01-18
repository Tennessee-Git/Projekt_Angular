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
  seatCodes:string[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.capacity);
    this.seatCodes = this.createSeatCodes(this.capacity);
    console.log(this.seatCodes);
  }

  handleClick() {
    this.setSelectedSeat("key");
  }

  createSeatCodes(capacity: number): string[]{
    let array:string[] = []
    for(let i = 0; i < capacity/10; i++)
    {
      let letter = String.fromCharCode(i+65);
      for(let j = 1; j<11;j++)
      {
        array.push(`${letter}-${j}`);
      }
    }
    return array;
  }
}
