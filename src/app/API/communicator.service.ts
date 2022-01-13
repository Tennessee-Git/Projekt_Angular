import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private messageSource = new Subject<string>();

  message$ = this.messageSource.asObservable();

  SendMessage(msg: string){
    this.messageSource.next(msg);
  }
}
