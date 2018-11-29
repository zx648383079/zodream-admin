import { Component, OnInit, OnDestroy } from '@angular/core';
import { MENU_ITEMS } from './frontend-menu';
import { ThemeService } from '../@theme/services';
import { Router } from '@angular/router';

@Component({
  selector: 'zo-frontend',
  template: `
  <zo-header></zo-header>
  <router-outlet></router-outlet>
  <zo-footer></zo-footer>
`,
})
export class FrontendComponent implements OnDestroy {

  /**
   *
   */
  constructor(
    private theme: ThemeService,
    private route: Router
  ) {
    if (theme.isMobile()) {
      route.navigateByUrl('/mobile');
      return;
    }
    this.theme.addClass('yx-theme');
  }

  ngOnDestroy(): void {
    this.theme.removeClass('yx-theme');
  }
}
