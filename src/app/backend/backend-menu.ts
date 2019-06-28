import {
  MenuItem
} from '../@theme/components/menu-item/menu-item';

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
        url: './'
      }, {
        name: '清除缓存',
        icon: 'fa fa-trash',
        url: './cache'
      }, {
        name: '生成SiteMap',
        icon: 'fa fa-map',
        url: './sitemap'
      }]
    }
];

const AUTH_MENU: MenuItem[] = [
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
    }, {
      name: '姓名',
      icon: 'fa fa-user',
      children: [{
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
        url: './logout'
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

const SHOP_MENU: MenuItem[] = [
    {
      name: '商品',
      icon: 'fa fa-list',
      expand: true,
      children: [{
          name: '商品列表',
          url: 'goods/list',
          icon: 'fa fa-list'
        },
        {
          name: '新增商品',
          url: 'goods/create',
          icon: 'fa fa-plus'
        },
        {
          name: '分类列表',
          icon: 'fa fa-list',
          url: './admin/category'
        }, {
          name: '品牌列表',
          icon: 'fa fa-list',
          url: './admin/brand'
        }, {
          name: '商品类型',
          icon: 'fa fa-list',
          url: './admin/attribute/group'
        }
      ]
    }, {
      name: '营销管理',
      icon: 'fa fa-bullhorn',
      children: [{
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
          name: '返现',
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
    }, {
      name: '订单管理',
      icon: 'fa fa-cubes',
      children: [{
        name: '订单列表',
        icon: 'fa fa-list',
        url: './admin/order'
      }, {
        name: '新建订单',
        icon: 'fa fa-plus',
        url: './admin/order/create'
      }]
    }, {
      name: '文章管理',
      icon: 'fa fa-book',
      children: [{
        name: '文章列表',
        icon: 'fa fa-list',
        url: './admin/article'
      }, {
        name: '新建文章',
        icon: 'fa fa-plus',
        url: './admin/article/create'
      }, {
        name: '分类列表',
        icon: 'fa fa-list',
        url: './admin/article/category'
      }, {
        name: '新建分类',
        icon: 'fa fa-plus',
        url: './admin/article/create_category'
      }]
    }, {
      name: '广告管理',
      icon: 'fa fa-ad',
      children: [{
        name: '广告列表',
        icon: 'fa fa-list',
        url: './admin/ad'
      }, {
        name: '新建广告',
        icon: 'fa fa-plus',
        url: './admin/ad/create'
      }, {
        name: '广告位列表',
        icon: 'fa fa-list',
        url: './admin/ad/position'
      }, {
        name: '新建广告位',
        icon: 'fa fa-plus',
        url: './admin/ad/create_position'
      }]
    }, {
      name: '插件',
      icon: 'fa fa-plug',
      children: [{
        name: '淘宝客',
        icon: 'fa fa-list',
        url: './admin/plugin/tbk'
      }]
    }, {
      name: '商城设置',
      icon: 'fa fa-cogs',
      children: [{
        name: '基本设置',
        icon: 'fa fa-cog',
        url: './admin/setting'
      }, {
        name: '签到设置',
        icon: 'fa fa-calendar-check',
        url: './admin/setting/checkin'
      }, {
        name: '支付列表',
        icon: 'fa fa-list',
        url: './admin/payment'
      }, {
        name: '新建支付',
        icon: 'fa fa-plus',
        url: './admin/payment/create'
      }, {
        name: '配送列表',
        icon: 'fa fa-list',
        url: './admin/shipping'
      }, {
        name: '新建配送',
        icon: 'fa fa-plus',
        url: './admin/shipping/create'
      }]
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
