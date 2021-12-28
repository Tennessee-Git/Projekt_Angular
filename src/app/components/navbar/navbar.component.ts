import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.clicked = false;
  }

  handleClick(): void {
    this.clicked = !this.clicked;
  }
}
