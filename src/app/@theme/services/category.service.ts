import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../models/category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IData } from '../models/page';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  get(): Observable<ICategory[]> {
    return this.http.get<IData<ICategory>>('shop/category').pipe(map(res => res.data));
  }
}
