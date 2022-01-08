import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API/api.service';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'showing-list',
  templateUrl: './showing-list.component.html',
  styleUrls: ['../showing-components.css']
})
export class ShowingListComponent implements OnInit {
  showings !: Showing[];
  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.getShowings().subscribe(data => this.showings = data);
    console.log(this.showings);
  }

}
