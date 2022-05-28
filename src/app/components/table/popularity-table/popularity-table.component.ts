import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'popularity-table',
  templateUrl: './popularity-table.component.html',
  styleUrls: ['./popularity-table.component.css']
})
export class PopularityTableComponent implements OnInit {
  @Input() showings !: Showing[];
  @Input() movies !: Movie[];

  constructor() { }

  ngOnInit(): void {
  }

}
