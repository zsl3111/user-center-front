export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [
        { name: '登录', path: '/user/login', component: './user/Login' },
        { name: '注册', path: '/user/register', component: './user/Register' }
        ] },
      { component: './404' },
    ],

  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    // 这是一个权限管理属性，只有canAdmin为true时才能看到下面的页面，在access.ts中配置
    access: 'canAdmin',
    // 可以理解为一个父组建，下面的都是他的子组件
    component: './Admin',
    routes: [
      //{path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
      {path: '/admin/userManage',name:'用户管理',icon: 'smile',component: './Admin/UserManage'},
      { component: './404' },

    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { icon: 'smile', path: '/shl', component: './DashboardAnalysis' },
  { component: './404' },
];
