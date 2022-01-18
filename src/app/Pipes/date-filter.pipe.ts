import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Showing } from '../models/Showing';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform { // DO POPRAWY!!!!!!

  transform(items: Showing[]): Showing[] {
    let output:Showing[]= [];
    let now = moment().format();
    console.log(now);
    items.forEach((showing:Showing) => {
      var tempMoment = moment(showing.date,'DD-MM-YYYY HH:mm');
      tempMoment.format();
      if(tempMoment.isSameOrAfter(now))
      {
        output.push(showing);
      }
    })
    return output;
  }
}
