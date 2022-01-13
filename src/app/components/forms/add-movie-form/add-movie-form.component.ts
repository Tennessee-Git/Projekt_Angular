import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/API/api.service';
import { CommunicatorService } from 'src/app/API/communicator.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['../form-components.css']
})
export class AddMovieFormComponent implements OnInit, OnDestroy {
  value!: number;
  subscription !: Subscription;
  constructor(private dialogRef: MatDialogRef<AddMovieFormComponent>, private api: APIService, private com: CommunicatorService) { }

  ngOnInit(): void {
    this.subscription = this.api.getMovies().subscribe((data)=> {
      var movies: Movie[] = data;
      this.value = movies[data.length-1].id+1;
      console.log(this.value);
    });
  }

  handleSubmit(formValues: Movie){
    let newMovie = {
      title: formValues.title,
      imageURL: formValues.imageURL,
      length: Number(formValues.length),
      label: formValues.title,
      value: this.value,
      popularity: 0
    };
    this.api.addMovie(newMovie).subscribe((response) => {
      console.log(response);
      this.com.SendMessage("reloadMovie");
    });
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
