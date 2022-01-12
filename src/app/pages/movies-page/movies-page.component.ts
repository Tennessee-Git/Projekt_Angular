import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMovieFormComponent } from 'src/app/components/forms/add-movie-form/add-movie-form.component';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog():void {
    let dialogRef = this.matDialog.open(AddMovieFormComponent);
  }
}
