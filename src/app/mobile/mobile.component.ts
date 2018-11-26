import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './mobile-menu';

@Component({
  selector: 'zo-mobile',
  template: `
  <router-outlet></router-outlet>
  <zo-tab-bar></zo-tab-bar>
`,
})
export class MobileComponent {

  menu = MENU_ITEMS;
}
