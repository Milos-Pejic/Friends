import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url="http://localhost:3000/friends"
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.url)
  }
}
