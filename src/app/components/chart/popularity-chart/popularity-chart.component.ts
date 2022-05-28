import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import * as moment from 'moment';
import { Movie } from 'src/app/models/Movie';
import { Showing } from 'src/app/models/Showing';

@Component({
  selector: 'popularity-chart',
  templateUrl: './popularity-chart.component.html',
  styleUrls: ['./popularity-chart.component.css']
})
export class PopularityChartComponent implements OnInit {
  @Input() showings !: Showing[];
  @Input() movies !: Movie[];
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
    this.showingsFromLast7Days = this.getShowingsFromLast7Days();
    this.setChartData();
    console.log(this.showings)
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
        { data: Object.values(obj), label: 'Ilość sprzedanych biletów' }
      ]
    }
  }

  getShowingsFromLast7Days():Showing[] {
    const now = new Date();
    const before = moment(now).subtract(7, 'd').toDate();

    const lastShowings:Showing[] = this.showings.filter( (showing) => {
      return moment(showing.date,'DD-MM-YYYY HH:mm').isBetween(moment(before), moment(now))
    });

    return lastShowings;
  }
}
