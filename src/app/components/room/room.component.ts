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
  test:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.setSelectedSeat("key");
  }

  createSeatArray =() => {
    let SeatArray = [];
    let TakenSeats = this.seatsTaken;
    for(let i = 0; i < this.capacity/10; i++)
    {
      let children = [];
      let letter = String.fromCharCode(i+65);
      for(let j = 1; j<11; j++)
      {
        let _key = `${letter}-${j}`;
        let temp = document.createElement("input");
        temp.type = 'checkbox';
        children.push(temp);
      }
      SeatArray.push(children)
    }
    return SeatArray;
  }

  testF(value: string):void{
    console.log(value);
  }
}
