import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from './chat.service';


@Component({
  selector: 'app-chat',
  styleUrls: ['./chat.scss'],
  templateUrl: './chat.html',
})
export class ChatComponent {

  @ViewChild('box') box: ElementRef;

  public lastUsers: Array<Object> = [];

  public users: Array<Object> = [];

  public messages: Array<Object> = [];

  public currentUser: Object;

  public hasMore = false;

  public isList = false;

  public page = 0;

  public content = '';

  constructor(
    protected service: ChatService
    ) {
    this.service.getLastUsers().subscribe(data => {
      if (data.code === 200) {
        this.lastUsers = data.data;
      }
    });
    this.service.getUsers().subscribe(data => {
      if (data.code === 200) {
        this.users = data.data;
      }
    });
  }

  public change(user: Object) {
    this.currentUser = user;
    this.page = 0;
    this.messages = [];
    this.getMore();
  }

  public getMore() {
    this.service.getMessage(this.currentUser['user_id'], ++this.page).subscribe(data => this.messages.push(...data));
  }

  public send() {
    this.service.sendMessage(this.currentUser['user_id'], this.content).subscribe(data => {
      if (data.code === 200) {
        this.content = '';
        this.scroll();
        this.messages.push(data.data);
      }
    });
  }

  public scroll(y: number = -1) {
    if (!this.box.nativeElement) {
      return;
    }
    if (y < 0) {
      y = this.box.nativeElement.scrollHeight + 100;
    }
    this.box.nativeElement.scrollTop = y;
  }
}
