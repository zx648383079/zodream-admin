import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'zo-pages',
  template: `
  <zo-layout [menu]="menu">
    <router-outlet></router-outlet>
  </zo-layout>
`,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
