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
  constructor() { }

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Ilość sprzedanych biletów' }
    ]
  };

  ngOnInit(): void {
    this.showingsFromLast7Days = this.getShowingsFromLast7Days();
  }

  getChartData():any[] {
    const chartData: any[] = [];


    return chartData;

  }

  getChartLabels() {
    const chartLabels:any[] = [];

    return chartLabels;
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
