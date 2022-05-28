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
  labels!:string[];

  constructor() { }

  ngOnInit(): void {
    this.showingsFromLast7Days = this.getShowingsFromLast7Days();
    this.getChartData();
  }

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  getChartData():void {
    const chartData = new Map<number, number>();

    this.showingsFromLast7Days.forEach( (showing) => {
      if(chartData.has(showing.movieId)) {
        let temp = (chartData.get(showing.movieId)) as number + 1;
        chartData.set(
          showing.movieId,
          temp
        )
      }
      else {
        chartData.set(
          showing.movieId,
          1
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
