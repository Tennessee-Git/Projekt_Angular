import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  URL: string = 'http://localhost:3006';

  constructor(private http : HttpClient) { }


}
