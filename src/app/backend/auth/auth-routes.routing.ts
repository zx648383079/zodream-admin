import { Routes, RouterModule } from '@angular/router';
import { MenuItem } from 'src/app/@theme/components/menu-item/menu-item';

export const authRoutes: Routes = [

];

export const AUTH_MENU: MenuItem[] = [
  {
    name: '用户管理',
    icon: 'fa fa-users',
    children: [{
      name: '用户列表',
      icon: 'fa fa-list',
      url: './admin/user'
    }, {
      name: '新增用户',
      icon: 'fa fa-plus',
      url: './admin/user/create'
    }]
  }, {
    name: '权限管理',
    icon: 'fa fa-magnet',
    children: [{
      name: '角色列表',
      icon: 'fa fa-list',
      url: './admin/role'
    }, {
      name: '新增角色',
      icon: 'fa fa-plus',
      url: './admin/role/create'
    }, {
      name: '权限列表',
      icon: 'fa fa-list',
      url: './admin/permission'
    }, {
      name: '新增权限',
      icon: 'fa fa-plus',
      url: './admin/permission/create'
    }]
  }, {
    name: '消息管理',
    icon: 'fa fa-bullhorn',
    children: [{
      name: '消息列表',
      icon: 'fa fa-list',
      url: './admin/bulletin'
    }, {
      name: '发送消息',
      icon: 'fa fa-plus',
      url: './admin/bulletin/create'
    }]
  }
];

export const AUTH_DOWN_MENU: MenuItem[] = [{
  name: '个人资料',
  icon: 'fa fa-info-circle',
  url: './admin/account'
}, {
  name: '账号关联',
  icon: 'fa fa-link',
  url: './admin/account/connect'
}, {
  name: '更改密码',
  icon: 'fa fa-key',
  url: './admin/account/password'
}, {
  name: '登陆记录',
  icon: 'fa fa-calendar-alt',
  url: './admin/account/login_log'
}, {
  name: '操作记录',
  icon: 'fa fa-calendar',
  url: './admin/account/log'
}, {
  name: '退出登陆',
  icon: 'fa fa-sign-out-alt',
  url: '/auth/logout'
}];

