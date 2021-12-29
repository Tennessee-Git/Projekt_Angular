import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() id !: number;
  @Input() title !: string;
  @Input() imageURL !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
