import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zo-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  menus: Array<any> = [
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

  constructor() { }

  ngOnInit() {
  }

}
