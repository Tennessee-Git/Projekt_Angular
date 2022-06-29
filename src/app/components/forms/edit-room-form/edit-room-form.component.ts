import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/API/api.service';
import { Room } from 'src/app/models/Rooms';

@Component({
  selector: 'app-edit-room-form',
  templateUrl: './edit-room-form.component.html',
  styleUrls: ['../form-components.css']
})
export class EditRoomFormComponent implements OnInit {
  id: number = -1;
  room!: Room;
  constructor(
    private route: ActivatedRoute,
    private api: APIService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.api.getRoomById(this.id).subscribe((response) => {
        this.room = response;
      });
    });
  }

  handleSubmit(formValues: Room) {
    console.log(formValues);
    this.room.capacity = formValues.capacity;
    this.api.editRoom(this.room, this.id).subscribe((response)=> {
      console.log(response);
      this.router.navigate(['/Sale']);
    });
  }

}
