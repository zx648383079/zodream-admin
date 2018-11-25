import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './backend-menu';

@Component({
  selector: 'zo-pages',
  template: `
  <zo-layout [menu]="menu">
    <router-outlet></router-outlet>
  </zo-layout>
`,
})
export class BackendComponent {

  menu = MENU_ITEMS;
}
