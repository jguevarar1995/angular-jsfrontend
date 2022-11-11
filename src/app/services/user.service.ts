import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { SHA256 } from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = environment.userURL;

  constructor(private httpclient: HttpClient) { }

  public login(user: User): Observable<any> {
    user.password = SHA256(user.password).toString();
    return this.httpclient.post<any>(`${this.userURL}`, user);
  }
}
