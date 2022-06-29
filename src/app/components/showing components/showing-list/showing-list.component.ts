import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/API/api.service';
import { CommunicatorService } from 'src/app/API/communicator.service';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'showing-list',
  templateUrl: './showing-list.component.html',
  styleUrls: ['../showing-components.css']
})
export class ShowingListComponent implements OnInit, OnDestroy {
  showings !: Showing[];
  subscription !: Subscription;
  constructor(private api: APIService, private com: CommunicatorService) { }

  ngOnInit(): void {
    this.getShowings();
    this.subscription = this.com.message$.subscribe((message) => {
      if(message == "reloadShowing")
      this.getShowings();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getShowings(){
    this.api.getShowings().subscribe((data) => {
      this.showings = data;
      console.log(data);});
  }

  delete = (id: number) : void => {
    console.log(`Delete ${id} from showing list`);
    this.api.deleteShowing(id).subscribe((response) => { this.getShowings() });
  }
}
