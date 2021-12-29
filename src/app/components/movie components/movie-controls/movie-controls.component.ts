import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-controls',
  templateUrl: './movie-controls.component.html',
  styleUrls: ['../movie-details/movie-details.component.css']
})
export class MovieControlsComponent implements OnInit {
  @Input() title !: string;
  @Input() id!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
