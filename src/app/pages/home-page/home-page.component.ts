import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API/api.service';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  showings !: Showing[];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.getShowings().subscribe((data) => {
      this.showings = data;});
  }

}
