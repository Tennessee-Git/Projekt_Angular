import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-showing-form',
  templateUrl: './add-showing-form.component.html',
  styleUrls: ['../form-components.css']
})
export class AddShowingFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddShowingFormComponent>) { }

  ngOnInit(): void {
  }

  handleSubmit(formValues: object){
    console.log(formValues);
    this.dialogRef.close();
  }
}
