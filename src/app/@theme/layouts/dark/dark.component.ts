import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../components/menu-item/menu-item';

@Component({
  selector: 'zo-dark-layout',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.scss']
})
export class DarkComponent implements OnInit {

  @Input() name = 'admin';

  @Input() menus: Array<MenuItem> = [];

  isExpand = false;

  constructor() { }

  ngOnInit() {
  }

  tapExpand() {
    this.isExpand = !this.isExpand;
  }

}
