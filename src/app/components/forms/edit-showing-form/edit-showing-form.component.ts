import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/API/api.service';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'app-edit-showing-form',
  templateUrl: './edit-showing-form.component.html',
  styleUrls: ['./edit-showing-form.component.css']
})
export class EditShowingFormComponent implements OnInit {
  id: number = -1;
  showing!: Showing;

  constructor(
    private route: ActivatedRoute,
    private api: APIService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.api.getShowingById(this.id).subscribe((response)=> this.showing = response);});
  }

  handleSubmit(formValues: Showing){
    console.log(formValues);

    this.api.editShowing(this.showing, this.showing.id).subscribe((response)=> {
      console.log(response);
      this.router.navigate(['/Seanse']);
    });
  }
}
