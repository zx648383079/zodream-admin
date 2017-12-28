import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configs } from '../../../../@theme/index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  constructor(
    private http: HttpClient
  ) {

  }

  public getLastUsers(): Observable<any> {
    return this.http.get(Configs.host + 'message/unread');
  }

  public getUsers(): Observable<any> {
    return this.http.get(Configs.host + 'message/friends');
  }

  public getMessage(user: number, page: number = 1): Observable<Array<any>> {
    return this.http.get<any>(Configs.host + 'message/list?user=' + user + '&page=' + page).map(data => {
        if (data.code !== 200) {
          return [];
        }
        return this.formatMessage(data.data);
    });
  }

  public formatMessage(args: Array<any>): Array<any> {
    const data = [];
    let lastTime = 0;
    args.forEach(item => {
      if (item.type < 0) {
        return;
      }
      if (item.create_at - lastTime > 300) {
        lastTime = item.create_at;
        data.push({
          type: -1,
          create_at: item.create_at
        });
      }
      data.push(item);
    });
    return data;
  }

  public sendMessage(user: number, content: string): Observable<any> {
    return this.http.post(Configs.host + 'message/send', {
      user_id: user,
      content: content
    });
  }
}
