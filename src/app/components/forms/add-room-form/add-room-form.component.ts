import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { APIService } from 'src/app/API/api.service';
import { CommunicatorService } from 'src/app/API/communicator.service';
import { Room } from 'src/app/models/Rooms';

@Component({
  selector: 'app-add-room-form',
  templateUrl: './add-room-form.component.html',
  styleUrls: ['../form-components.css']
})
export class AddRoomFormComponent implements OnInit {
  private value!: number;
  private subscription !: Subscription;
  constructor(private dialogRef: MatDialogRef<AddRoomFormComponent>, private api: APIService, private com: CommunicatorService) { }

  ngOnInit(): void {
    this.subscription = this.api.getRooms().subscribe((data) => {
      var rooms: Room[] = data;
      this.value = rooms[data.length-1].id+1;
    })
  }

  handleSubmit(formValues: Room) {
    let newRoom = {
      capacity: formValues.capacity,
      value: this.value,
      label: "Sala " + String(this.value)
    }
    this.api.addRoom(newRoom).subscribe((response) => {
      console.log(response);
      this.com.SendMessage("reloadRoom");
    });
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
