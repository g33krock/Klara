import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(`${this.baseURL}/users`);
  }
  
  createUser(userData: { username: string; email: string }): Observable<any> {
    return this.http.post(`${this.baseURL}/users`, userData);
  }
  
  updateUser(id: number, username: string, email: string): Observable<any> {
    const body = { id, username, email };
    return this.http.put(`${this.baseURL}updatedata.php`, body);
  }

  deleteUser(id: number): Observable<any> {
    const body = { id };
    return this.http.request('delete', `${this.baseURL}deletedata.php`, { body });
  }
  
  
}
