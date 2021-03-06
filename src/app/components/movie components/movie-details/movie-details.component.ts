import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['../movie-components.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() id !: number;
  @Input() title !: string;
  @Input() imageURL !: string;
  @Input()deleteFunction!: (id: number) => void;

  constructor() { }

  ngOnInit(): void {
  }

  delete():void{
    this.deleteFunction(this.id);
  }

}
