import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPage } from '../models/page';
import { IProduct, IHomeProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
   * get
   */
  public get(): Observable<IPage<IProduct>> {
    return this.http.get<IPage<IProduct>>('shop/goods');
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
