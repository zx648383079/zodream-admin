import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from '../models/page';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const HISTORY_KEY = 'search_history';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  /**
   * keywords
   */
  public keywords(): Observable<string[]> {
    return this.http.get<IData<string>>('shop/search/keywords').pipe(map(res => res.data));
  }

  /**
   * tips
   */
  public tips(keywords: string): Observable<string[]> {
    return this.http.get<IData<string>>('shop/search/tips', {
      params: {
        keywords: keywords
      }
    }).pipe(map(res => res.data));
  }

  /**
   * saveHistory
   */
  public saveHistory(data: string[]) {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(data));
  }

  /**
   * getHistory
   */
  public getHistory(): string[] {
    return JSON.parse(localStorage.getItem(HISTORY_KEY));
  }

  /**
   * clearHistory
   */
  public clearHistory() {
    localStorage.removeItem(HISTORY_KEY);
  }

}
