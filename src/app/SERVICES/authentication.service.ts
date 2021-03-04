import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  serverUrl: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  saveUser(user){
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(){
    return localStorage.getItem('user');
  }

  isRegistered():boolean{
    return localStorage.getItem('user')? true: false;
  }

  logOut(){
    return localStorage.removeItem('user');
  }
}
