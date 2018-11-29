import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'zo-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;

  @Output() selectItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  tapItem() {
    this.menuItem.active = !this.menuItem.active;
    if (this.menuItem.chidren) {
      this.menuItem.expand = !this.menuItem.expand;
    }
    this.selectItem.emit(this.menuItem);
  }

}
