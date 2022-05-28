import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { APIService } from 'src/app/API/api.service';
import { CommunicatorService } from 'src/app/API/communicator.service';
import { Room } from 'src/app/models/Rooms';

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['../room-components.css']
})
export class RoomListComponent implements OnInit {
  rooms !: Room[];
  subscription!: Subscription;
  constructor(private api: APIService, private com: CommunicatorService) { }

  ngOnInit(): void {
    this.getRooms();
    this.subscription = this.com.message$.subscribe((message) =>{
      if(message == "relaodRoom")
        this.getRooms();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getRooms(){
    this.api.getRooms().subscribe((data) => {
      this.rooms = data;
      console.log(data); });
  }

  delete = (id: number) : void => {
    console.log(`Delete ${id} from room list`);
    this.api.deleteRoom(id).subscribe((response) => { this.getRooms() });
  }
}
