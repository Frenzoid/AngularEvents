import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EVENTSURL } from '../../constants/constants';
import { Responsersult } from '../../interfaces/response';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TicketPaidService {

constructor(private http: HttpClient) { }

purcharse(id: number, amount) {
  return this.http.post(EVENTSURL + 'attend/' + id, amount)
  .catch((response: HttpErrorResponse) => {console.log(response); return Observable.throw('Error getting confirmation from servers!' +
       `. Server returned code ${response.error}, message was: ${response.message}, server status ${response.status}`); })
  .map((response: Responsersult) => {
    console.log("-TICKET COMPRADO-");
    console.log(response);
    console.log("---------------------");
    if (response.error) { throw response; }
    return response.result.users;
  });
}

}
