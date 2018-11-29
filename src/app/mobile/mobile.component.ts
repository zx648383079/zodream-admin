import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { MENU_ITEMS } from './mobile-menu';
import { ThemeService } from '../@theme/services';
import { StateService } from '../@theme/services/state.service';

@Component({
  selector: 'zo-mobile',
  template: `
  <router-outlet></router-outlet>
  <zo-tab-bar [hidden]="!hasBar"></zo-tab-bar>
`,
})
export class MobileComponent implements OnInit, OnDestroy {


  @ViewChild('body') body: ElementRef;

  hasBar = true;

  constructor(
    private theme: ThemeService,
    private state: StateService) {
      state.navState$.subscribe(res => {

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
