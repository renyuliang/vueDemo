/*
* Created by 符菲菲 on 2018/1/23
*/
const page = [
  {
    path: '/',
    meta: {title: '一蟹数据中心'},
    component: resolve => require(['@/pages/index.vue'], resolve),
    name: 'index',
    children: [
      {
        path: '/',
        meta: {title: '首页 - 一蟹数据中心'},
        component: resolve => require(['@/pages/Index/index.vue'], resolve),
        name: 'index'
      },
      {
        path: '/iterativePush',
        meta: {title: '迭代推送 - 一蟹数据中心'},
        component: resolve => require(['@/pages/IterativePush/index.vue'], resolve),
        name: 'index',
        children: [
          {
            path: '/',
            meta: {title: '迭代通知 - 一蟹数据中心'},
            component: resolve => require(['@/pages/IterativePush/pushNotice.vue'], resolve),
            name: 'pushNotice'
          },
          {
            path: '/iterativePush/pushRelease',
            meta: {title: '迭代发布 - 一蟹数据中心'},
            component: resolve => require(['@/pages/IterativePush/pushRelease.vue'], resolve),
            name: 'pushRelease'
          }
        ]
      },
      {
        path: '/iterativePush/pushNoticeList',
        meta: {title: '迭代列表 - 迭代通知 - 一蟹数据中心'},
        component: resolve => require(['@/pages/IterativePush/pushNoticeList.vue'], resolve),
        name: 'pushNoticeList'
      },
      {
        path: '/iterativePush/pushNoticeListInfo',
        meta: {title: '迭代详情 - 迭代列表 - 迭代通知 - 一蟹数据中心'},
        component: resolve => require(['@/pages/IterativePush/pushNoticeListInfo.vue'], resolve),
        name: 'pushNoticeListInfo'
      },
      {
        path: '/iterativePush/pushAdd',
        meta: {title: '新增迭代 - 迭代发布 - 一蟹数据中心'},
        component: resolve => require(['@/pages/IterativePush/pushAdd.vue'], resolve),
        name: 'pushAdd'
      },
      {
        path: '/iterativePush/pushEdit',
        meta: {title: '编辑迭代 - 迭代发布 - 一蟹数据中心'},
        component: resolve => require(['@/pages/IterativePush/pushEdit.vue'], resolve),
        name: 'pushEdit'
      },
      {
        path: '/iterativePush/pushReleaseInfo',
        meta: {title: '迭代发布详情 -  迭代通知 - 一蟹数据中心'},
        component: resolve => require(['@/pages/IterativePush/pushReleaseInfo.vue'], resolve),
        name: 'pushReleaseInfo'
      },
      {
        path: '/organizationalStructure',
        meta: {title: '组织架构 - 一蟹数据中心'},
        component: resolve => require(['@/pages/OrganizationalStructure/index.vue'], resolve),
        name: 'index'
      },
      {
        path: '/applyManagement',
        meta: {title: '应用管理 - 一蟹数据中心'},
        component: resolve => require(['@/pages/ApplyManagement/index.vue'], resolve),
        name: 'index'
      },
      {
        path: '/managementCenter',
        meta: {title: '管理中心 - 一蟹数据中心'},
        component: resolve => require(['@/pages/ManagementCenter/index.vue'], resolve),
        name: 'index',
        children: [
          {
            path: '/',
            meta: {title: '权限管理 - 管理中心 - 一蟹数据中心'},
            component: resolve => require(['@/pages/ManagementCenter/managementRbac.vue'], resolve),
            name: 'managementRbac'
          },
          {
            path: '/managementCenter/managementJob',
            meta: {title: '职位管理 - 管理中心 - 一蟹数据中心'},
            component: resolve => require(['@/pages/ManagementCenter/managementJob.vue'], resolve),
            name: 'managementJob'
          },
          {
            path: '/managementCenter/managementMan',
            meta: {title: '管理员 - 管理中心 - 一蟹数据中心'},
            component: resolve => require(['@/pages/ManagementCenter/managementMan.vue'], resolve),
            name: 'managementMan'
          }
        ]
      },
      {
        path: '/managementCenter/managementAddJob',
        meta: {title: '新增职务 - 职位管理 - 管理中心 - 一蟹数据中心'},
        component: resolve => require(['@/pages/managementCenter/managementAddJob.vue'], resolve),
        name: 'managementAddJob'
      },
      {
        path: '/managementCenter/managementEditJob',
        meta: {title: '编辑职务 - 职位管理 - 管理中心 - 一蟹数据中心'},
        component: resolve => require(['@/pages/managementCenter/managementEditJob.vue'], resolve),
        name: 'managementEditJob'
      },
      {
        path: '/managementCenter/managementSearchJob',
        meta: {title: '查看职务 - 职位管理 - 管理中心 - 一蟹数据中心'},
        component: resolve => require(['@/pages/managementCenter/managementSearchJob.vue'], resolve),
        name: 'managementSearchJob'
      },
      {
        path: '/managementCenter/managementManAdd',
        meta: {title: '新增管理员 - 管理中心 - 一蟹数据中心'},
        component: resolve => require(['@/pages/managementCenter/managementManAdd.vue'], resolve),
        name: 'managementManAdd'
      }
    ]
  }
]

export default page
