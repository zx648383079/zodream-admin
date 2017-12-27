import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Configs } from '../../../@theme/index';

@Injectable()
export class MenuService {
  constructor(
    private httpClient: HttpClient
  ) {}

  public getMenus(): Observable<any> {
    return this.httpClient.get<any>(Configs.host + 'wx/menu').map(res => {
      const data: Array<any> = res.data;
      // for (let i = data.length; i < 3; i ++) {
      //   data.push({
      //     id: 0
      //   });
      // }
      return data;
    });
  }

  public saveMenu(menu: any): Observable<any> {
    return this.httpClient.post(Configs.host + 'wx/menu/update', menu);
  }
}



