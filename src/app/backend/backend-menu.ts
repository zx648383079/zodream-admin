import {
  MenuItem
} from '../@theme/components/menu-item/menu-item';
import { SHOP_MENU } from './shop/shop-routes.routing';
import { AUTH_MENU } from './auth/auth-routes.routing';

const SITE_MENU: MenuItem[] = [
    {
      name: '友情链接',
      icon: 'fa fa-link',
      url: './friend_link'
    }, {
      name: '留言反馈',
      icon: 'fa fa-cookie',
      url: './feedback'
    }, {
      name: '系统管理',
      icon: 'fa fa-cogs',
      children: [{
        name: '基本设置',
        icon: 'fa fa-cog',
        url: 'system/setting'
      }, {
        name: '清除缓存',
        icon: 'fa fa-trash',
        url: 'system/cache'
      }, {
        name: '生成SiteMap',
        icon: 'fa fa-map',
        url: 'system/sitemap'
      }]
    }
];


const BLOG_MENU: MenuItem[] = [
    {
      name: '文章管理',
      icon: 'fa fa-book',
      children: [{
        name: '文章列表',
        icon: 'fa fa-list',
        url: './admin/blog'
      }, {
        name: '发表文章',
        icon: 'fa fa-plus',
        url: './admin/blog/create'
      }]
    }, {
      name: '分类管理',
      icon: 'fa fa-tags',
      children: [{
        name: '分类列表',
        icon: 'fa fa-list',
        url: './admin/term'
      }, {
        name: '新增分类',
        icon: 'fa fa-plus',
        url: './admin/term/create'
      }, {
        name: '标签列表',
        icon: 'fa fa-list',
        url: './admin/tag'
      }]
    }, {
      name: '评论',
      icon: 'fa fa-comment',
      url: './admin/comment'
    }
];



export const MENU_ITEMS: MenuItem[] = [
    {
        name: '首页',
        url: '../home',
        icon: 'fa fa-home'
    },
    ... SHOP_MENU,
    ... AUTH_MENU,
    ... SITE_MENU
];
