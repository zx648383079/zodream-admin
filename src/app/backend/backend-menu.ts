import { MenuItem } from '../@theme/components/menu-item/menu-item';

export const MENU_ITEMS: MenuItem[] = [
  {
    name: '首页',
    url: '../home',
    icon: 'fa fa-home'
  },
  {
    name: '商品',
    icon: 'fa fa-list',
    expand: true,
    chidren: [
      {
        name: '商品列表',
        url: '../goods',
        icon: 'fa fa-list'
      },
      {
        name: '新增商品',
        url: '../goods/create',
        icon: 'fa fa-plus'
      }
    ]
  }
];
