import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICart } from '../models/cart';
import { Observable } from 'rxjs';
import { IData } from '../models/page';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  get(): Observable<ICart[]> {
    return this.http.get<IData<ICart>>('shop/cart').pipe(map(res => res.data));
  }

  /**
   * add
   */
  public add(goods, amount = 1): Observable<ICart> {
    return this.http.post<ICart>('shop/cart/add', {
      goods: goods,
      amount: amount
    });
  }

  public update(id, amount = 1): Observable<ICart> {
    return this.http.post<ICart>('shop/cart/update', {
      id: id,
      amount: amount
    });
  }

  public delete(id): Observable<ICart> {
    return this.http.post<ICart>('shop/cart/delete', {
      id: id,
    });
  }

}
