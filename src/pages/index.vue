<template>
  <div class="hello">
    <header-bar></header-bar>
    <bread-crumb></bread-crumb>
    <router-view/>
  </div>
</template>
<script>
import headerBar from '../components/headerBar.vue'
import BreadCrumb from '../components/BreadCrumb.vue'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    headerBar,
    BreadCrumb
  }
}
</script>
