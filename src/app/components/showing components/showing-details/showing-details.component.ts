import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'showing-details',
  templateUrl: './showing-details.component.html',
  styleUrls: ['../showing-components.css']
})
export class ShowingDetailsComponent implements OnInit {
  @Input() id !: number;
  @Input() date !: string;
  @Input() movieTitle !: string;
  @Input() roomId !: number;
  @Input() availableSeats !: number;

  constructor() { }

  ngOnInit(): void {
  }
}
