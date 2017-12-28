import { Component, ViewChild, ElementRef } from '@angular/core';
import { NotifyService } from './notify.service';


@Component({
  selector: 'app-notify',
  styleUrls: ['./notify.scss'],
  templateUrl: './notify.html',
})
export class NotifyComponent {

  public data: Array<Object> = [];

  public categories: Array<Object> = [];

  public current= 1;

  constructor(
    protected service: NotifyService
    ) {
    this.data = [
      {
        title: 'saaaaa',
        content: 'aaaaaaaaaaaaaaaaaaaa',
        create_at: 1400000000
      }
    ];
    this.categories = [
      {
        id: 1,
        name: '系统通知',
        count: 4
      },
      {
        id: 2,
        name: '活动通知',
        count: 0
      }
    ];
  }

  onChange(item: any) {
    this.current = item.id;
  }

}
