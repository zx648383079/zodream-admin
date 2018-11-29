import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';

@Component({
  selector: 'zo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menus: Array<MenuItem> = [];

  constructor() { }

  ngOnInit() {
  }

  tapItem(item: MenuItem) {
    this.menus.forEach(i => {
      if (item === i) {
        return;
      }
      i.active = false;
      i.expand = false;
    });
  }

}
