import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['../movie-components.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() id !: number;
  @Input() title !: string;
  @Input() imageURL !: string;

  constructor() { }

  ngOnInit(): void {
  }
  delete(): void{
    console.log("Usuwanie filmu " + this.id);
    //this.api.deleteMovie(this.id);
  }
}
