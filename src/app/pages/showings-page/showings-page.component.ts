import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddShowingFormComponent } from 'src/app/components/forms/add-showing-form/add-showing-form.component';

@Component({
  selector: 'app-showings-page',
  templateUrl: './showings-page.component.html',
  styleUrls: ['./showings-page.component.css']
})
export class ShowingsPageComponent implements OnInit {
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog():void {
    let dialogRef = this.matDialog.open(AddShowingFormComponent);
  }
}
