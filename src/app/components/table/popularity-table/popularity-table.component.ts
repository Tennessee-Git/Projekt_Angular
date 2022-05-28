import { Component, Input, OnInit } from '@angular/core';
import { getShowingsFromLast7Days } from 'src/app/API/popularity';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'popularity-table',
  templateUrl: './popularity-table.component.html',
  styleUrls: ['./popularity-table.component.css']
})
export class PopularityTableComponent implements OnInit {
  @Input() showings !: Showing[];
  showingsFromLast7Days !: Showing[];

  displayedColumns: string[] = ['movieTitle', 'ticketCount'];
  dataSource = [
    {title: '', ticketCount: 0}
  ];

  constructor() { }

  ngOnInit(): void {
    this.showingsFromLast7Days = getShowingsFromLast7Days(this.showings);
    this.setDataSource();
  }

  setDataSource():void {
    const tableData = new Map<string, number>();

    this.showingsFromLast7Days.forEach( (showing) => {
      if(tableData.has(showing.movieTitle)) {
        let temp = (tableData.get(showing.movieTitle)) as number + showing.seatsTaken.length;
        tableData.set(
          showing.movieTitle,
          temp
        )
      }
      else {
        tableData.set(
          showing.movieTitle,
          showing.seatsTaken.length
        )
      }
    });

    let temp = new Map([...tableData.entries()].sort((a, b) => b[1] - a[1]));
    let array = Array.from(temp.entries()).slice(0,5);
    this.dataSource = array.map(element=> ({title: element[0], ticketCount: element[1]}));
  }

}
