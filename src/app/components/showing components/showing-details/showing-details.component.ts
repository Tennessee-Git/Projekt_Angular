import { Component, Input, OnInit } from '@angular/core';
import { Showing } from 'src/app/models/Showing';

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
  @Input() showing !:Showing;

  constructor() { }

  ngOnInit(): void {
  }
}
