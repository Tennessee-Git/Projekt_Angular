import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommunicatorService } from 'src/app/API/communicator.service';

@Component({
  selector: 'app-add-showing-form',
  templateUrl: './add-showing-form.component.html',
  styleUrls: ['../form-components.css']
})
export class AddShowingFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddShowingFormComponent>, private com: CommunicatorService) { }

  ngOnInit(): void {
  }

  handleSubmit(formValues: object){
    console.log(formValues);
    this.dialogRef.close();
    this.com.SendMessage("reloadShowing");
  }
}
