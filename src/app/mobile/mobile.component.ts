import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ThemeService } from '../@theme/services';
import { StateService } from '../@theme/services/state.service';

@Component({
  selector: 'zo-mobile',
  template: `
  <router-outlet></router-outlet>
  <zo-tab-bar [hidden]="!hasBar" [menus]="menus"></zo-tab-bar>
`,
})
export class MobileComponent implements OnInit, OnDestroy {


  @ViewChild('body') body: ElementRef;

  hasBar = true;

  menus = [
    {
      name: '首页',
      icon: 'home',
      url: '/mobile/home',
      active: true
    },
    {
      name: '分类',
      icon: 'th-large',
      url: '/mobile/category',
    },
    {
      name: '购物车',
      icon: 'shopping-cart',
      url: '/mobile/cart',
      count: 10
    },
    {
      name: '个人',
      icon: 'user',
      url: '/mobile/member',
    },
  ];

  constructor(
    private theme: ThemeService,
    private state: StateService) {
        state.navState$.subscribe(res => {
            for (let i = 0; i < this.menus.length; i++) {
                this.menus[i].active = res === i;
            }
        });
        state.modeState$.subscribe(res => {
            this.hasBar = res;
        });
    }

  ngOnInit(): void {
    this.theme.addClass('mobile-theme');
  }

  ngOnDestroy() {
    this.theme.removeClass('mobile-theme');
  }
}
