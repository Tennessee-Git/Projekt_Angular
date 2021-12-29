import { Component, Input, OnInit } from '@angular/core';
import { APIService } from 'src/app/API/api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies!: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
