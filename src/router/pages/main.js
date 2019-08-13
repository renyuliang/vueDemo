const page = [
  {
    path: '/',
    component: resolve => require(['@/pages/index.vue'], resolve),
    children: [
      {
        path: '/',
        meta: {title: '首页', icon: 'el-icon-news'},
        component: resolve => require(['@/pages/Index/index.vue'], resolve),
        name: 'index'
      },
      {
        path: '/iterativePush',
        meta: {title: '迭代推送', icon: 'el-icon-menu'},
        component: resolve => require(['@/pages/IterativePush/index.vue'], resolve),
        name: 'index',
        children: [
          {
            path: '/iterativePush',
            meta: {title: '迭代通知'},
            component: resolve => require(['@/pages/IterativePush/pushNotice.vue'], resolve),
            name: 'pushNotice'
          },
          {
            path: '/iterativePush/pushRelease',
            meta: {title: '迭代发布'},
            component: resolve => require(['@/pages/IterativePush/pushRelease.vue'], resolve),
            name: 'pushRelease'
          },
          {
            path: '/iterativePush/pushAdd',
            meta: {title: '新增发布'},
            component: resolve => require(['@/pages/IterativePush/pushAdd.vue'], resolve),
            name: 'pushAdd',
            hidden: true
          }
        ]
      },
      {
        path: '/applyManagement',
        meta: {title: '应用管理', icon: 'el-icon-printer'},
        component: resolve => require(['@/pages/applyManagement/index.vue'], resolve),
        name: 'index'
      },
      {
        path: '/managementCenter',
        meta: {title: '管理中心', icon: 'el-icon-setting'},
        component: resolve => require(['@/pages/managementCenter/index.vue'], resolve),
        name: 'index',
        children: [
          {
            path: '/managementCenter',
            meta: {title: '权限管理'},
            component: resolve => require(['@/pages/managementCenter/managementRbac.vue'], resolve),
            name: 'managementRbac'
          },
          {
            path: '/managementCenter/managementJob',
            meta: {title: '职务管理'},
            component: resolve => require(['@/pages/managementCenter/managementJob.vue'], resolve),
            name: 'managementJob'
          },
          {
            path: '/managementCenter/managementMan',
            meta: {title: '管理员'},
            component: resolve => require(['@/pages/managementCenter/managementMan.vue'], resolve),
            name: 'managementMan'
          }
        ]
      }
    ]
  }
]

export default page
