import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Configs } from '../../../@theme/index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MediaService {
  constructor(private httpClient: HttpClient) { }

  /**
   * list
   */
  public list(): Observable<any> {
    return this.httpClient.get(Configs.host + 'wx/media');
  }
}
