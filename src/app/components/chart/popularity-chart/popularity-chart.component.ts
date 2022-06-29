import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import * as moment from 'moment';
import { getShowingsFromLast7Days } from 'src/app/API/popularity';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'popularity-chart',
  templateUrl: './popularity-chart.component.html',
  styleUrls: ['./popularity-chart.component.css']
})
export class PopularityChartComponent implements OnInit {
  @Input() showings !: Showing[];
  showingsFromLast7Days !: Showing[];
  chartType: ChartType = 'bar'
  chartData!: ChartData<'bar'>;
  chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  labels!:string[];

  constructor() { }

  ngOnInit(): void {
    this.showingsFromLast7Days = getShowingsFromLast7Days(this.showings);
    this.setChartData();
  }

  setChartData():void {
    const chartData = new Map<string, number>();

    this.showingsFromLast7Days.forEach( (showing) => {
      if(chartData.has(showing.movieTitle)) {
        let temp = (chartData.get(showing.movieTitle)) as number + showing.seatsTaken.length;
        chartData.set(
          showing.movieTitle,
          temp
        )
      }
      else {
        chartData.set(
          showing.movieTitle,
          showing.seatsTaken.length
        )
      }
    });

    let temp = new Map([...chartData.entries()].sort((a, b) => b[1] - a[1]));
    let obj = Object.fromEntries(Array.from(temp.entries()).slice(0,5));

    this.chartData = {
      labels: Object.keys(obj),
      datasets: [
        { data: Object.values(obj), label: 'Ilość sprzedanych biletów z ostatnich 7 dni' }
      ]
    }
  }
}
