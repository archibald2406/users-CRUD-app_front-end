import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/';

  constructor(public http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.baseUrl}users`);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}users`, user);
  }

  editUser(user: User): Observable<any> {
    return this.http.put(`${this.baseUrl}users/${user.id}`, user);
  }

  removeUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}users/${id}`);
  }
}
