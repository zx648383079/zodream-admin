import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Configs } from '../../../@theme';

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

}
