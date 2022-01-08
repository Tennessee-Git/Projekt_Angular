import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/app/API/api.service';

@Component({
  selector: 'movie-controls',
  templateUrl: './movie-controls.component.html',
  styleUrls: ['../movie-components.css']
})
export class MovieControlsComponent implements OnInit {
  @Input() title !: string;
  @Input() id!: number;
  constructor(private api: APIService) { }

  ngOnInit(): void {
  }
  delete(): void{
    console.log("Usuwanie filmu " + this.id);
    //this.api.deleteMovie(this.id);
  }
}
