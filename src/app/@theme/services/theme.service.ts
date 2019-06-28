import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  public body: HTMLElement;

  constructor() {
    this.body = document.body;
  }

  public addClass(...tags: string[]) {
    this.body.classList.add(...tags);
  }

  public removeClass(...tags: string[]) {
    this.body.classList.remove(...tags);
  }

  public isMobile(): boolean {
    const userAgentInfo = navigator.userAgent;
    const agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
    for (let i = 0; i < agents.length; i++) {
      if (userAgentInfo.indexOf(agents[i]) > 0) {
        return true;
      }
    }
    return false;
  }

}
