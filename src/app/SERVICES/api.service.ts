import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl: string = "https://whatsapp-clone-np.herokuapp.com"

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getChats(): Observable<any>{
    return this.http.get(this.serverUrl + '/chats');
  }

  postChats(chat: {}): Observable<any>{
    return this.http.post(this.serverUrl + '/chats', chat)
  }
  postResource(route: string, item): Observable<any>{
    return this.http.post(this.serverUrl + route, item);
  }

}
