import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Showing } from '../models/Showing';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform { // DO POPRAWY!!!!!!

  transform(items: Showing[]): Showing[] {
    if(!items) {
        return items;
      }
    const now = moment().format('YYYY-MM-DD HH:mm');
    console.log(now);
    return items.filter((item:Showing) => {
      var date: string = moment(item.date).format('YYYY-MM-DD HH:mm');
      if(moment(date).isSameOrAfter(now) === true)
        {
          console.log(item);
          return item;
        }
      return null;
    });
  }
}
