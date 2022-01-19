import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input("capacity") capacity : number=0;
  @Input() seatsTaken !: string[];
  @Input() setSelectedSeat!: (seatCode: string) => void;
  seatCodes:string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.seatCodes = this.createSeatCodes(this.capacity);
  }

  handleClick(code:string) {
    console.log(code);
    this.setSelectedSeat(code);
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

  seatTaken(code:string):boolean{
    if(this.seatsTaken.includes(code))
      return true;
    else
      return false;
  }
}
