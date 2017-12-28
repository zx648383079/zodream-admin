import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotifyService {


  constructor(
    private http: HttpClient
  ) {

  }
}
