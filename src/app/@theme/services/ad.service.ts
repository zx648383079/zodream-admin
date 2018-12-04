import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAd } from '../models/ad';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IData } from '../models/page';

@Injectable()
export class AdService {

  constructor(private http: HttpClient) { }

  /**
   * get
   */
  public get(position: number): Observable<IAd[]> {
    return this.http.get<IAd[]>('shop/ad?position=' + position);
  }

  /**
   * banner
   */
  public banner(): Observable<IAd[]> {
    return this.http.get<IData<IAd>>('shop/ad/banner').pipe(map(res => res.data));
  }
}
