/*
* Created by 符菲菲 on 2018/1/23
*/
const page = [
  {
    path: '/',
    component: resolve => require(['@/pages/index.vue'], resolve),
    children: [
      {
        path: '/',
        meta: {title: '首页'},
        component: resolve => require(['@/pages/Index/index.vue'], resolve),
        name: 'index'
      },
      {
        path: '/iterativePush',
        meta: {title: '迭代推送'},
        component: resolve => require(['@/pages/IterativePush/index.vue'], resolve),
        name: 'index',
        children: [
          {
            path: '/',
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
            name: 'pushAdd'
          }
        ]
      }
    ]
  }
]

export default page
