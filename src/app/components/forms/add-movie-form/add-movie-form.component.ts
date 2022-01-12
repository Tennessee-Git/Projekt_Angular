import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { APIService } from 'src/app/API/api.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['../form-components.css']
})
export class AddMovieFormComponent implements OnInit {
  value!: number;
  constructor(private dialogRef: MatDialogRef<AddMovieFormComponent>, private api: APIService) { }

  ngOnInit(): void {
    this.api.getMovieCount();
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
    this.api.addMovie(newMovie).subscribe((response) => {console.log(response)});
    this.dialogRef.close();
  }
}
