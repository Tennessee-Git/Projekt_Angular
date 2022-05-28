import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['../room-components.css']
})
export class RoomDetailsComponent implements OnInit {
  @Input() id!: number;
  @Input() label!: string;
  @Input() value!: number;
  @Input() capacity!: number;
  @Input()deleteFunction!: (id: number) => void;

  constructor() { }

  ngOnInit(): void {
  }

  delete():void{
    this.deleteFunction(this.id);
  }
}
