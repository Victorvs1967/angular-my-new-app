import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  public getUser(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  public addUser(user: object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

  public updateUser(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  public deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
