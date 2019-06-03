import {
  MenuItem
} from '../@theme/components/menu-item/menu-item';


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
        chidren: [{
            name: '商品列表',
            url: 'goods/list',
            icon: 'fa fa-list'
        },
        {
            name: '新增商品',
            url: 'goods/create',
            icon: 'fa fa-plus'
        }]
    },
    {
        name: '营销管理',
        icon: 'fa fa-bullhorn',
        chidren: [
            {
                name: '营销中心',
                url: './activity',
                icon: 'fa fa-list'
            },
            {
                name: '优惠券',
                url: '../coupon',
                icon: 'fa fa-list'
            },
            {
                name: '组合',
                url: '../activity/mix',
                icon: 'fa fa-list'
            },
            {
                name:  '返现',
                url: '../activity/cashback',
                icon: 'fa fa-list'
            },
            {
                name: '满减/满送',
                url: '../activity/discount',
                icon: 'fa fa-list'
            },
            {
                name: '团购',
                url: '../activity/group_buy',
                icon: 'fa fa-list'
            },
            {
                name: '砍价',
                url: '../activity/bargain',
                icon: 'fa fa-list'
            },
            {
                name: '限时秒杀',
                url: '../activity/seckill',
                icon: 'fa fa-list'
            },
            {
                name: '抽奖',
                url: '../activity/lottery',
                icon: 'fa fa-list'
            },
            {
                name: '试用',
                url: '../activity/free_tial',
                icon: 'fa fa-list'
            },
        ]
    },
];
