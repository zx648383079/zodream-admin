import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  profile(): Observable<IUser> {
    return this.http.get<IUser>('auth/user');
  }

}
