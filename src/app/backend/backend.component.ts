import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './backend-menu';

@Component({
  selector: 'zo-backend',
  template: `
  <zo-dark-layout [menus]="menu">
    <router-outlet></router-outlet>
  </zo-dark-layout>
`,
})
export class BackendComponent {

  menu = MENU_ITEMS;
}
