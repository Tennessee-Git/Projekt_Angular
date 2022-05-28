import * as moment from 'moment';
import { Showing } from 'src/app/models/Showing';

export function getShowingsFromLast7Days(showings: Showing[]):Showing[] {
  const now = new Date();
  const before = moment(now).subtract(7, 'd').toDate();

  const lastShowings:Showing[] = showings.filter( (showing) => {
    return moment(showing.date,'DD-MM-YYYY HH:mm').isBetween(moment(before), moment(now))
  });

  return lastShowings;
}
