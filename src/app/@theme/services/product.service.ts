import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPage } from '../models/page';
import { IProduct, IHomeProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
   * get
   */
  public get(params?: HttpParams | any): Observable<IPage<IProduct>> {
    return this.http.get<IPage<IProduct>>('shop/goods', {
      params: params
    });
  }

  /**
   * info
   */
  public info(id: number): Observable<IProduct> {
    return this.http.get<IProduct>('shop/goods?id=' + id);
  }

  /**
   * home
   */
  public home(): Observable<IHomeProduct> {
    return this.http.get<IHomeProduct>('shop/goods/home');
  }
}
