import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/API/api.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-edit-movie-form',
  templateUrl: './edit-movie-form.component.html',
  styleUrls: ['../form-components.css']
})
export class EditMovieFormComponent implements OnInit {
  id: number = -1;
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private api: APIService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.api.getMovieById(this.id).subscribe((response)=> {
        this.movie = response;
        });
      });
  }

  handleSubmit(formValues: Movie) {
    console.log(formValues);
    this.movie.imageURL = formValues.imageURL;
    this.movie.title = formValues.title;
    this.movie.length = formValues.length;
    this.movie.label = formValues.title;
    this.api.editMovie(this.movie, this.id).subscribe((response)=> {
      console.log(response);
      this.router.navigate(['/Filmy']);
    });

  }
}
