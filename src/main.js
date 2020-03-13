// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'element-ui/lib/theme-chalk/index.css'
import $axios from './api/request'

// 自定义插件
import initSum from 'get_sum'
Vue.component('init-sum',initSum)

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.use(VueQuillEditor)

Vue.config.productionTip = false
Vue.prototype.$axios = $axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
